/** @format */
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  description,
  image,
  price,
  hasPrime,
  rating,
}) {
  // arrow function add item to basket
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      image,
      price,
      hasPrime,
      rating,
    };
    // push items into redux store
    dispatch(addToBasket(product));
  };
  // arrow funtion remove item from basket
  const removeItemfromBasket = () => {};
  return (
    <div className='grid grid-cols-5 py-5 border-b border-gray-100'>
      <Image src={image} height={200} width={200} objectFit='contain' />
      {/* Middel */}
      <div className='col-span-3 mx-5'>
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
              loading='lazy'
              src='https://links.papareact.com/fdw'
              alt=''
              className='w-12'
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right Add/remove basket */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBasket} className='button'>
          Add to basket
        </button>
        <button onClick={removeItemfromBasket} className='button'>
          Remove to basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
