async function getAllProducts() {
  const data = await fetch('https://dummyjson.com/products/?limit=100');
  const json = await data.json();

  return json.products;
}

export { getAllProducts };
