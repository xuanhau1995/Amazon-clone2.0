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
        <div className='hidden sm:flex  bg-yellow-400 hover:bg-yellow-500'>
          <input type='text' />
          <SearchIcon className='h-12 p-4' />
        </div>
      </div>
    </header>
  );
}

export default Header;
