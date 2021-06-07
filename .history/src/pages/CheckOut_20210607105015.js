/** @format */

import Header from "../components/Header";
import Image from "next/image"

function CheckOut() {
  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
        <div>
          <Image src="https://papareact.com/ikj"/>
        </div>
        {/* Right */}
      </main>
    </div>
  );
}

export default CheckOut;
