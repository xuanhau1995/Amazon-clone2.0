/** @format */

import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useSession } from "next-auth/client";

function CheckOut() {
  const [session] = useSession;
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
          <div className='flex flex-col bg-white shadow-sm rounded p-5 space-y-10 mt-4'>
            <h1 className='text-2xl border-b pb-4'>
              {items.length === 0
                ? "Your Amazon basket is empty."
                : "Shopping basket"}
            </h1>
            <div>
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='whitespace-nowrap'>
          {items.length > 0 && (
            <>
              <h1>
                Subtotal({items.length} Items):
                <span className='font-bold'>Items</span>
              </h1>
              <button
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed"
                }`}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default CheckOut;
