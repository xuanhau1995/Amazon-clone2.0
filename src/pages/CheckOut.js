/** @format */

import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function CheckOut() {
  // Select from REDUX store
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  // function click to checkout
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    // Call Backend to create  a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
    // Redirect user/customer to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) alert(result.error.message);
  };

  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-2'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
          />

          <div className='flex flex-col bg-white shadow-sm p-5 space-y-10 mt-4'>
            <h1 className='text-2xl border-b pb-4 border-gray-100'>
              {items.length === 0
                ? "Your Amazon basket is empty."
                : "Shopping basket"}
            </h1>
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
        {/* Right */}
        {items.length > 0 && (
          <>
            <div className='bg-white flex flex-col p-10 shadow-sm m-2'>
              <h1>
                Subtotal({items.length} Items):
                <span className='font-bold'>
                  <Currency quantity={total} curency='GBP' />
                </span>
              </h1>
              <button
                role='link'
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed"
                }`}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CheckOut;
