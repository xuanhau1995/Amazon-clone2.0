/** @format */
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

// Variables Bien so
const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  //arrow funtion
  const addItemToBasket = () => {
    //push item into the store
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    // dispatch an action
    dispatch(addToBasket)
  };
  // rating
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  // prime
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col bg-white m-5 z-30 p-6 cursor-pointer hover:shadow-lg '>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4 className='py-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='my-2 text-xs line-clamp-1'>{description}</p>
      <div className='mb-5'>
        <Currency quantity={price} currency='GBP' />
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2'>
          <img src='https://links.papareact.com/fdw' alt='' className='w-12' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addToBasket} className='mt-auto button'>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
