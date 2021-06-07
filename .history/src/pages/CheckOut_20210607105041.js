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
          <Image src="https://papareact.com/ikj" width={1020} height={250}/>
        </div>
        {/* Right */}
      </main>
    </div>
  );
}

export default CheckOut;
