/** @format */
import Image from "next/image";
function CheckoutProduct({
  key,
  id,
  title,
  description,
  image,
  price,
  hasPrime,
  rating,
}) {
  return (
    <div className='grid grid-cols-5'>
      <Image src={image} />
    </div>
  );
}

export default CheckoutProduct;
