/** @format */
import Image from "next/image";

function Product({ id, title, price, description, category, image }) {
  return (
    <div>
      <p>{category}</p>
     <Image/>
    </div>
  );
}

export default Product;
