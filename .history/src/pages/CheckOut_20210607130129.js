/** @format */

import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function CheckOut() {
  // Select from REDUX store
  const items = useSelector(selectItems);
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
          />
          <div className='flex flex-col bg-white shadow-sm rounded p-5 space-y-10'>
            <h1 className='text-2xl border-b pb-4'>
              {items.length === 0 ? "Your Amazon basket is empty." : "Shopping basket"}
            </h1>
          </div>
        </div>
        {/* Right */}
      </main>
    </div>
  );
}

export default CheckOut;
