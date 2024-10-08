export const useProductsByBrands = () => {
  const dataProducts = [
    {
      category: 'Cocacola',
      products: [
        {
          id: 1,
          name: 'Cocacola Lata',
          image:
            'https://cdn.shopify.com/s/files/1/0566/4391/1854/files/7501055300075_250923_294ac6d7-ae2c-4638-bf7d-bac762780dd7.webp?v=1695834936',
          price: 22,
        },
        {
          id: 2,
          name: 'Cocacola Lata Light',
          image:
            'https://m.media-amazon.com/images/I/71DrXUuvb9L._AC_UF1000,1000_QL80_.jpg',
          price: 22,
        },
        {
          id: 3,
          name: 'Cocacola Lata sin azúcar ',
          image:
            'https://m.media-amazon.com/images/I/51dIyhTm17L._AC_UF1000,1000_QL80_.jpg',
          price: 22,
        },
        {
          id: 4,
          name: 'Cocacola 600ml ',
          image:
            'https://we-market.com.mx/wp-content/uploads/2023/09/coca-cola-600-ml.png',
          price: 22,
        },
      ],
    },
    {
      category: 'Tortas',
      products: [
        {
          id: 10,
          name: 'Torta de Milanesa',
          image:
            'https://www.pikpng.com/pngl/m/247-2473461_002-torta-de-milanesa-clipart.png',
          price: 55,
        },
        {
          id: 11,
          name: 'Torta de Salchicha',
          image:
            'https://img77.uenicdn.com/image/upload/v1615327905/business/2242c73f-d74b-4628-ab6a-b2ba1d2d1823.jpg',
          price: 50,
        },
        {
          id: 12,
          name: 'Torta de Jamón ',
          image:
            'https://w7.pngwing.com/pngs/296/89/png-transparent-sausage-sandwich-hamburger-cheese-sandwich-torta-cheeseburger-food-recipe-cheese-sandwich.png',
          price: 50,
        },
      ],
    },
  ];

  return dataProducts;
};
