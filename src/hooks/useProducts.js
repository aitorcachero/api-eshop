import { initialFilters } from '../services/const';

function useProducts() {
  const handleSearch = (e, filters) => {
    const value = e.target.value;
    const newFilter = { ...filters };
    newFilter.searchWords = value;
    return newFilter;
  };

  const handleRange = (e, filters) => {
    const minValue = e.minValue;
    const maxValue = e.maxValue;
    console.log({ minValue, maxValue });
    const newFilter = { ...filters };
    newFilter.minValue = minValue;
    newFilter.maxValue = maxValue;
    return newFilter;
  };

  const filterMaxPrice = (e, i, categorys, products, filters) => {
    const value = categorys[i].value;
    const maxPrice = products
      .filter((producto) => producto.category.includes(value))
      .sort((a, b) => b.price - a.price)[0].price;

    const newFilter = { ...filters };
    newFilter.category = value;
    newFilter.maxPrice = maxPrice;
    newFilter.valueRange = maxPrice;
    return newFilter;
  };

  const resetFilters = (products) => {
    const maxPrice = products.sort((a, b) => b.price - a.price)[0].price;
    const newObject = { ...initialFilters };
    newObject.maxPrice = maxPrice;
    newObject.valueRange = maxPrice;
    newObject.category = '';
    return newObject;
  };

  return {
    handleSearch,
    handleRange,
    filterMaxPrice,
    resetFilters,
  };
}

export default useProducts;
