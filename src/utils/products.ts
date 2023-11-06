export interface Product {
  id: number;
  title: string;
  description: string;
  product_variant: ProductVariant[];
  images: string[];
  //   size: "S" | "M" | "L" | "XL";
  collection: string;
}

interface ProductVariant {
  title: string;
  price: number;
  thumbnail: string;
}

const products: Product[] = [
  {
    id: 1,
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
    collection: "Women's Jackets",
  },
  {
    id: 2,
    title: "Wool Coat",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/16032960/7225149966996.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 189.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/2052/1809693423320.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2052/540433930411.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Women's Jackets",
  },
  {
    id: 3,
    title: "Dotted Letterman",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/299ead55-8c6a-4bbc-8994-55c1aa1ff21a.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 119.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/9ecfa2aa-9a73-4c18-b0ff-fb820bd424d6.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/d02ebbdf-86ce-410f-a311-47ecf38b6ddc.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/63c10a98-f2d2-4b35-8393-1f7ab3b1be18.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/e147d90b-279a-4aff-978b-ab86df1e648a.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Men's Jackets",
  },
  {
    id: 4,
    title: "Leather Jacket",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/5acac60b-2888-41cc-9a4a-491a2d4153d8.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 164.99,
      },
      {
        title: "Cream",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/a8d01817-ad0a-4bd3-9f48-8a1464e87e8f.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 164.99,
      },
      {
        title: "Red",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/60a924d7-5aae-4d0d-8b86-f89ad17b9451.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 164.99,
      },
      {
        title: "Brown",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/2e5f5d43-2492-498d-8818-9af9aec9345b.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 164.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/5acac60b-2888-41cc-9a4a-491a2d4153d8.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/a8d01817-ad0a-4bd3-9f48-8a1464e87e8f.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2e5f5d43-2492-498d-8818-9af9aec9345b.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2e5f5d43-2492-498d-8818-9af9aec9345b.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Women's Jackets",
  },
  {
    id: 5,
    title: "Harajuku Puffer Jacket",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Teal",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210107/5203457355095.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 249.99,
      },
      {
        title: "Silver",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210107/19563143281548.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 249.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/20210107/645255731062.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210107/981996826057.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210107/2253540856817.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210107/2432332989666.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Men's Jackets",
  },
  {
    id: 6,
    title: "Yachting Polo Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "White",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/fa683223-19f7-4061-ac28-0b6cc86dc8d1.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 49.99,
      },
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/ee67e528-4c97-4726-ae20-389531fe25a9.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 49.99,
      },
      {
        title: "Red",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/4f9add78-4877-4fff-80cb-7912cdb998b4.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 49.99,
      },
      {
        title: "Gray",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/98390a8e-1b6f-4fe7-9013-c6009c1903b5.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 49.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/fa683223-19f7-4061-ac28-0b6cc86dc8d1.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/ee67e528-4c97-4726-ae20-389531fe25a9.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/4f9add78-4877-4fff-80cb-7912cdb998b4.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/98390a8e-1b6f-4fe7-9013-c6009c1903b5.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Men's Jackets",
  },
];

export default products;
