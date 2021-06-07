/** @format */
import Image from "next/image";
function CheckoutProduct({
  id,
  title,
  description,
  image,
  price,
  hasPrime,
  rating,
}) {
  return (
    <div className='grid grid-cols-5 border rounded'>
      <Image src={image} height={200} width={200} objectFit='contain' />
      {/* Middel */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
