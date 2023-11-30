export interface Product {
  id: number;
  title: string;
  description: string;
  product_variant: ProductVariant[];
  images: string[];
  //   size: "S" | "M" | "L" | "XL";
  collection: string;
  gender: "mens" | "womens";
}

export interface ProductVariant {
  title: string;
  price: number;
  thumbnail: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Cashmere Trench Coat",
    description:
      "Made with vegan friendly wool this winter coat is both lightweight and comfortable.",
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
        title: "Black",
        thumbnail:
          "https://cbu01.alicdn.com/img/ibank/O1CN01MXl6HF1tYfCNoCMaU_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 349.99,
      },
      {
        title: "Brown",
        thumbnail:
          "https://cbu01.alicdn.com/img/ibank/O1CN01KoL4vS1tYfCKy75fw_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 349.99,
      },
    ],
    images: [
      "https://cbu01.alicdn.com/img/ibank/O1CN01xBtLCf1tYfCRD44EO_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cbu01.alicdn.com/img/ibank/O1CN01MXl6HF1tYfCNoCMaU_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cbu01.alicdn.com/img/ibank/O1CN01KoL4vS1tYfCKy75fw_!!2214094255914-0-cib.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Jackets",
    gender: "womens",
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
        price: 121.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/2052/1809693423320.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2052/540433930411.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Jackets",
    gender: "womens",
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
    collection: "Jackets",
    gender: "mens",
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
      "https://cc-west-usa.cjdropshipping.com/60a924d7-5aae-4d0d-8b86-f89ad17b9451.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2e5f5d43-2492-498d-8818-9af9aec9345b.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    collection: "Jackets",
    gender: "womens",
  },
  {
    id: 5,
    title: "Harajuku Puffer Jacket",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Blue",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210107/5203457355095.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 113.99,
      },
      {
        title: "Gray",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210107/19563143281548.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 113.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/20210107/645255731062.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210107/981996826057.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210107/2253540856817.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210107/2432332989666.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "mens",
    collection: "Jackets",
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
    gender: "mens",
    collection: "Shirts",
  },
  {
    id: 7,
    title: "Stand Up Collar Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Blue",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/1623755026150.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 61.99,
      },
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/1623755026147.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 61.99,
      },
      {
        title: "White",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/1623755026146.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 61.99,
      },
      {
        title: "Gray",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/1623755051440.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 61.99,
      },
      {
        title: "Emerald",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/1623755026145.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 61.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/1623755026150.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/1623755026147.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/1623755026146.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/1623755051440.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/1623755026145.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "mens",
    collection: "Shirts",
  },
  {
    id: 8,
    title: "Summer V Neck",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "White",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/734f895f-7edf-4790-82a8-9fbfea7a7a09.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 39.99,
      },
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/8e785df1-27af-4e8c-82e3-d4507ec90ff3.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 39.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/734f895f-7edf-4790-82a8-9fbfea7a7a09.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/8e785df1-27af-4e8c-82e3-d4507ec90ff3.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "womens",
    collection: "Shirts",
  },
  {
    id: 9,
    title: "Lace Blouse",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/2043/11238086025765.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 74.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/2043/11238086025765.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2043/965768060958.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2043/1111741701498.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2043/2870409500870.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "womens",
    collection: "Shirts",
  },
  {
    id: 10,
    title: "Cashmere Cardigan",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "White",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210114/390731469363.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 174.99,
      },
      {
        title: "Gray",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210114/2595206067710.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 174.99,
      },
      {
        title: "Blue",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210114/888894745405.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 124.99,
      },
      {
        title: "Brown",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210114/508970050334.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 174.99,
      },
      {
        title: "Red",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20210114/370137849147.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 124.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/20210114/390731469363.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210114/2595206067710.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210114/888894745405.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210114/508970050334.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20210114/370137849147.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "mens",
    collection: "Jackets",
  },
  {
    id: 11,
    title: "Lace Sleeve Sweater",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/2041/1183462202755.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 65.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/2041/1183462202755.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2041/352029157096.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2041/2105795484863.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/2041/1041382082620.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "womens",
    collection: "Shirts",
  },
  {
    id: 12,
    title: "Glossy Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/858f38c8-5752-4e0e-97cc-28b0bd7d0b94.jpeg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 35.99,
      },
      {
        title: "Yellow",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/b3f79dff-d6b3-4601-8996-9a6b3e7feef2.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 35.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/858f38c8-5752-4e0e-97cc-28b0bd7d0b94.jpeg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/b3f79dff-d6b3-4601-8996-9a6b3e7feef2.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "womens",
    collection: "Shirts",
  },
  {
    id: 13,
    title: "Slim Fit Long Sleeve Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "Black",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/20190617/9103002727879.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 32.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/20190617/9103002727879.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/15607008/962549131896.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20190617/715165111337.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "womens",
    collection: "Shirts",
  },
  {
    id: 14,
    title: "V Neck Crossover Sweater",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi debitis veniam expedita quaerat molestiae architecto veritatis repellendus distinctio voluptates corrupti repellat reiciendis, incidunt nesciunt aut aliquid explicabo esse. Similique, nobis.",
    product_variant: [
      {
        title: "White",
        thumbnail:
          "https://cc-west-usa.cjdropshipping.com/17000928/1725083628477747200.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
        price: 82.99,
      },
    ],
    images: [
      "https://cc-west-usa.cjdropshipping.com/20190617/9103002727879.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/15607008/962549131896.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.cjdropshipping.com/20190617/715165111337.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
    gender: "womens",
    collection: "Shirts",
  },
];

export default products;
