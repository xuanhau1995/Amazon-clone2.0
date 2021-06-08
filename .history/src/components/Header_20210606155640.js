/** @format */
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <header className='sticky top-0 z-50'>
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
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          {/* If there is no session then i want to sign in othervise sign Out */}
          <div onClick={!session ? signIn : signOut} className='link'>
            {/* Nếu khôgn thì */}
            <p>{session ? `Hello ${session.user.name}` : `Sign In`}</p>
            <p className='font-extrabold md:text-sm'>Account & lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Order</p>
          </div>
          <div onClick={() => router.push("/CheckOut")} className='link relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 bg-yellow-400 w-4 h-4 text-center font-bold text-black rounded-full'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className='flex space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm items-center'>
        <p className='flex link items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link'>Sell</p>
        <p className='link hidden lg:inline-flex'>Customer Service</p>
        <p className='link hidden lg:inline-flex'>Food & Grocezy</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;