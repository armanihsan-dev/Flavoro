import { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { PropagateLoader } from 'react-spinners';

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen font-['roboto'] gap-2">
          <h2 className="text-3xl font-semibold  text-center">
            Order Successful !
          </h2>
          <p>Your order has been successfully placed</p>
          <button
            onClick={() => history.back()}
            className=" bg-green-400 text-white cursor-pointer hover:bg-green-500 group rounded-full px-4 font-bold  py-2 flex items-center gap-2"
          >
            <IoIosArrowRoundBack className="text-2xl group-hover:-translate-x-2 transition-all duration-150 " />
            <span>Back</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
