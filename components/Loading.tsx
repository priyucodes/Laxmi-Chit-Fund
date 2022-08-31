import Image from 'next/image';
import PropagateLoader from 'react-spinners/PropagateLoader';

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <Image
          className="rounded-full h-20 w-20"
          height={'100%'}
          width={'100%'}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8kFtx7BOXyCfytx-V1OgHlIdZf_fhpa__nlofFRps2vQyQakpvEclk_3z_Q9Smtw7TQ&usqp=CAU"
          alt="hero"
        />
        <h1 className="text-lg text-white font-bold">
          Loading The Laxmi Chit Fund
        </h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}
export default Loading;
