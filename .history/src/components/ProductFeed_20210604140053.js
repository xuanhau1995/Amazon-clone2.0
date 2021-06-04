/** @format */

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({id, title, price, description, category, image}) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
}

export default ProductFeed;
