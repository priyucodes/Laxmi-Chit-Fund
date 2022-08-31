import {
  useAddress,
  useContract,
  useMetamask,
  useDisconnect,
  useContractCall,
  useContractData,
} from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Login from '../components/Login';

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) {
    return <Loading />;
  }
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Laxmi Chit Fund</title>
      </Head>
      <Header />

      {/* Draw Box */}
      <div>
        <div>
          <h1 className="text-5xl font-semibold text-white text-center">
            The Next Draw
          </h1>
        </div>
        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
            <h2 className="text-sm">Total Pool</h2>
            <p className="text-xl">0.1 MATIC</p>
          </div>
        </div>
      </div>

      {/* Price per ticket box */}
      <div></div>
    </div>
  );
};

export default Home;
