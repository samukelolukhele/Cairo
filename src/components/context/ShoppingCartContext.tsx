import { ReactNode, createContext, useContext, useState } from "react";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (
    id: number,
    thumbnail: string,
    title: string,
    price: number,
    variantTitle: string
  ) => void;
  decreaseCartQuantity: (variantTitle: string, id: number) => void;
  removeFromCart: (variantTitle: string, id: number) => void;
  cartItems: CartProps[];
  cartTotal: string;
};

type CartProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  variantTitle: string;
};

const ShoppingCartContext = createContext({} as ContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ProviderProps): ReactNode {
  const { saveToLocalStorage, parseFromLocalStorage } = useLocalStorage();
  const [cartItems, setCartItems] = useState<CartProps[]>(
    parseFromLocalStorage("cart_items") || []
  );

  saveToLocalStorage("cart_items", cartItems);

  const cartTotal = new Intl.NumberFormat().format(
    cartItems.reduce((total, cartItem) => {
      const item = cartItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item: CartProps) => item.id == id)?.quantity || 0;
  }

  function increaseCartQuantity(
    id: number,
    thumbnail: string,
    title: string,
    price: number,
    variantTitle: string
  ) {
    setCartItems((currItems: CartProps[]) => {
      if (
        currItems.find(
          (item: CartProps) =>
            item.id === id && item.variantTitle === variantTitle
        ) == null
      ) {
        saveToLocalStorage("cart_items", [
          ...currItems,
          { id, quantity: 1, thumbnail, title, price, variantTitle },
        ]);

        return [
          ...currItems,
          { id, quantity: 1, thumbnail, title, price, variantTitle },
        ];
      } else {
        return currItems.map((item: CartProps) => {
          if (item.id === id && item.variantTitle === variantTitle) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            saveToLocalStorage<CartProps>("cart_items", item);
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(variantTitle: string, id: number) {
    setCartItems((currItems: CartProps[]) => {
      if (
        currItems.find(
          (item: CartProps) =>
            item.id === id && item.variantTitle === variantTitle
        )
      ) {
        currItems.filter(
          (item: CartProps) => item.variantTitle !== variantTitle
        );
        saveToLocalStorage<CartProps[]>("cart_items", currItems);
      }

      return currItems.map((item: CartProps) => {
        if (
          item.id === id &&
          item.variantTitle === variantTitle &&
          item.quantity > 1
        ) {
          saveToLocalStorage<CartProps>("cart_items", {
            ...item,
            quantity: item.quantity - 1,
          });
          return { ...item, quantity: item.quantity - 1 };
        } else {
          saveToLocalStorage<CartProps>("cart_items", item);
          return item;
        }
      });
    });
  }

  function removeFromCart(variantTitle: string, id: number) {
    setCartItems((currItems: CartProps[]) => {
      const newCart = currItems.filter((item: CartProps) => {
        if (item.variantTitle + id !== variantTitle + item.id) return item;
      });

      saveToLocalStorage<CartProps[]>("cart_items", newCart);

      return newCart;
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
