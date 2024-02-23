const categorys = [
  { name: 'Todos', value: '' },
  { name: 'Portatiles', value: 'laptops' },
  { name: 'Teléfonos', value: 'smartphones' },
  { name: 'Motocicletas', value: 'motorcycle' },
  { name: 'Muebles', value: 'furniture' },
  { name: 'Tops', value: 'tops' },
  { name: 'Vestidos de mujer', value: 'womens-dresses' },
  { name: 'Fragancias', value: 'fragrances' },
  { name: 'Zapatos de mujer', value: 'womens-shoes' },
  { name: 'Relojes de caballero', value: 'mens-watches' },
  { name: 'Joyas de mujer', value: 'womens-jewellery' },
  { name: 'Cuidado de la piel', value: 'skincare' },
  { name: 'Comestibles', value: 'groceries' },
  { name: 'Bolsos de mujer', value: 'womens-bags' },
  { name: 'Camisas de hombre', value: 'mens-shirts' },
  { name: 'Decoración de hogar', value: 'home-decoration' },
  { name: 'Relojes de mujer', value: 'womens-watches' },
  { name: 'Zapatos de hombre', value: 'mens-shoes' },
  { name: 'Gafas de sol', value: 'sunglasses' },
  { name: 'Iluminación', value: 'lighting' },
  { name: 'Automoción', value: 'automotive' },
];

const initialFilters = {
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  category: '',
  minValue: 0,
  maxValue: 0,
  searchWords: '',
};

const order = [
  'Sin orden',
  'Precio: Mayor a menor',
  'Precio: Menor a mayor',
  'Ascendente: A-Z',
  'Descendente: Z-A',
];

export { categorys, initialFilters, order };
