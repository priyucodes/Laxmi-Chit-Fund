import Image from 'next/image';
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    // mobile first(small scren) tailwind css (DEFAULT)
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full h-20 w-20"
          height={'100%'}
          width={'100%'}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8kFtx7BOXyCfytx-V1OgHlIdZf_fhpa__nlofFRps2vQyQakpvEclk_3z_Q9Smtw7TQ&usqp=CAU"
          alt="hero"
        />

        <div>
          <h1 className="text-lg text-white font-bold">Laxmi Chit Fund</h1>
          <p className="text-xs text-emerald-500 truncate">
            User: {address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton title="Buy Tickets" isActive />
          <NavButton onClick={disconnect} title="Logout" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 text-white mx-auto cursor-pointer" />
        <span className="md:hidden">
          <NavButton onClick={disconnect} title="Logout" />
        </span>
      </div>
    </header>
  );
}
export default Header;
