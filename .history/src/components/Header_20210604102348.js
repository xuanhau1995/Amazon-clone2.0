/** @format */
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className='text-white flex items-center' >
          <div>
            <p>Hello Xuan Hau</p>
            <p>Account & lists</p>
          </div>
          <div>
            <p>Returns</p>
            <p>& Order</p>
          </div>
          <div>
            <ShoppingCartIcon className='h-10' />
            <p>Basket</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
