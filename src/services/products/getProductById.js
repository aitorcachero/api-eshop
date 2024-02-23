async function getProductById(id) {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const json = data.json();
  return json;
}

export default getProductById;
