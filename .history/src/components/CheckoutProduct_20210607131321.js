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
      <Image src={image} height={200} width={200} objectFit='contain' />
    </div>
  );
}

export default CheckoutProduct;
