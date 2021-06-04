/** @format */
import Image from "next/image";

function Product({ id, title, price, description, category, image }) {
  return (
    <div>
      <p>{category}</p>
     <Image src={image}/>
    </div>
  );
}

export default Product;
