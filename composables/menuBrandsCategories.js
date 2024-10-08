export const useMenuCategoriesAndBrands = () => {
  const dataCategories = [
    {
      title: 'Bebidas',
      brands: [
        { label: 'Cocacola' },
        { label: 'Pepsi' },
        { label: 'Peñafiel' },
        { label: 'Jumex' },
        { label: 'Aguas Frescas' },
        { label: 'Electrolit' },
      ],
    },
    {
      title: 'Comida',
      brands: [
        { label: 'Enchiladas' },
        { label: 'Chilaquiles' },
        { label: 'Tortas' },
        { label: 'Chapatas' },
      ],
    },
    {
      title: 'Papas',
      brands: [{ label: 'Barcel' }, { label: 'Sabritas' }, { label: 'Totis' }],
    },
    {
      title: 'Ensaladas',
      brands: [
        { label: 'Tradicional' },
        { label: 'Quinoa' },
        { label: 'Avena' },
      ],
    },
    {
      title: 'Amaranto',
      brands: [{ label: 'Galletas' }, { label: 'Obleas' }, { label: 'Barras' }],
    },
  ];

  return dataCategories;
};
