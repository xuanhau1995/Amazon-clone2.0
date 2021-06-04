/** @format */
import Image from "next/image";

function Product({ id, title, price, description, category, image }) {
  return (
    <div>
      <p>{category}</p>
     <Image src={image} height={120}/>
    </div>
  );
}

export default Product;
