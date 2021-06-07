/** @format */
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
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
    <div className='grid grid-cols-5 rounded shadow-sm p-4'>
      <Image src={image} height={200} width={200} objectFit='contain' />
      {/* Middel */}
      <div className='col-span-4 mx-5'>
        <p>{title}</p>
        <div className='flex my-2'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3 text-gray-500'>{description}</p>
        <Currency quantity={price} currency='GBP' />
        {/* If has prime then ... return (....) */}
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              src='https://links.papareact.com/fdw'
              alt=''
              className='w-12'
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
