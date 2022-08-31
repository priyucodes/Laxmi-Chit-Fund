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
          src="https://i.imgur.com/4h7mAu7.png"
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
