interface Product {
  title: string;
  description: string;
  product_variant: ProductVariant[];
  images: string[];
  //   size: "S" | "M" | "L" | "XL";
}

interface ProductVariant {
  title: string;
  price: number;
  thumbnail: string;
}

const products: Product[] = [
  {
    title: "Solid Colar Trench Coat",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Yellow",
        thumbnail:
          "https://cbu01.alicdn.com/img/ibank/O1CN01R4AZYm1tYfCNfitsJ_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 349.99,
      },
      {
        title: "White",
        thumbnail:
          "https://cbu01.alicdn.com/img/ibank/O1CN01xBtLCf1tYfCRD44EO_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 349.99,
      },
      {
        title: "Blue",
        thumbnail:
          "https://cbu01.alicdn.com/img/ibank/O1CN019Rg0cS1tYfCOrXvde_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 349.99,
      },
    ],
    images: [
      "https://cbu01.alicdn.com/img/ibank/O1CN01xBtLCf1tYfCRD44EO_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cbu01.alicdn.com/img/ibank/O1CN01MXl6HF1tYfCNoCMaU_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cbu01.alicdn.com/img/ibank/O1CN01KoL4vS1tYfCKy75fw_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
];
