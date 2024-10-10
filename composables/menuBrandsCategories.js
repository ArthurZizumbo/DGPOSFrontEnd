export const useMenuCategoriesAndBrands = () => {
  const dataCategories = [
    {
      label: 'Bebidas',
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
      label: 'Comida',
      brands: [
        { label: 'Enchiladas' },
        { label: 'Chilaquiles' },
        { label: 'Tortas' },
        { label: 'Chapatas' },
      ],
    },
    {
      label: 'Papas',
      brands: [{ label: 'Barcel' }, { label: 'Sabritas' }, { label: 'Totis' }],
    },
    {
      label: 'Ensaladas',
      brands: [
        { label: 'Tradicional' },
        { label: 'Quinoa' },
        { label: 'Avena' },
      ],
    },
    {
      label: 'Amaranto',
      brands: [{ label: 'Galletas' }, { label: 'Obleas' }, { label: 'Barras' }],
    },
  ];

  return dataCategories;
};
