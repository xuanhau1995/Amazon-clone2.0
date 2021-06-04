/** @format */

function ProductFeed({ products }) {
  return (
    <div>
      <h1>this is product</h1>
      {products.map((product) => (
        // <p>{product.title}</p>
      ))}
    </div>
  );
}

export default ProductFeed;
