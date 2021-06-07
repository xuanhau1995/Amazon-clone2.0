/** @format */
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
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
    <div className='grid grid-cols-5 rounded shadow-sm p-4 px-4'>
      <Image src={image} height={200} width={200} objectFit='contain' />
      {/* Middel */}
      <div className='col-span-4 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className="text-xs my-5 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
