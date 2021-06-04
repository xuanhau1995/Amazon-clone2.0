/** @format */
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import { useState } from "react";

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState();
  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4>{title}</h4>
    </div>
  );
}

export default Product;
