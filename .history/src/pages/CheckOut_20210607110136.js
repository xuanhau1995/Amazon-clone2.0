/** @format */

import Header from "../components/Header";
import Image from "next/image";

function CheckOut() {
  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-5'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col bg-white shadow-sm rounded p-5'>
            <h1>This is Basket 111</h1>
          </div>
        </div>
        {/* Right */}
      </main>
    </div>
  );
}

export default CheckOut;
