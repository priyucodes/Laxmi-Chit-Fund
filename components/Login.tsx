import { useMetamask } from '@thirdweb-dev/react';
import Image from 'next/image';

function Login() {
  const connectWithMetamask = useMetamask();
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          className="rounded-full h-56 w-56 mb-10"
          width={'100%'}
          height={'100%'}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8kFtx7BOXyCfytx-V1OgHlIdZf_fhpa__nlofFRps2vQyQakpvEclk_3z_Q9Smtw7TQ&usqp=CAU"
          alt="hero"
        />
        <h1 className="text-6xl text-white font-bold">THE LAXMI CHIT FUND</h1>
        <h2 className="text-white ">
          Get Started By Logging in with your MetaMask
        </h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
}
export default Login;
