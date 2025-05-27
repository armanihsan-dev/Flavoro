import { IoMdClose } from 'react-icons/io';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const [activeCart, setActiveCart] = useState(false);
  const state = useSelector((state) => state.cart.cartItems);
  const totalQTY = state.reduce((totalQTY, item) => totalQTY + item.qty, 0);
  const TotalPrice = state.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <>
      <section
        className={`fixed right-0 top-0 bg-white w-full  lg:w-[25vw] h-full p-3 ${
          activeCart ? 'translate-x-0' : ' translate-x-full'
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        <div>
          {state.length > 0 ? (
            state.map((item, index) => {
              return (
                <ItemCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  qty={item.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty !
            </h2>
          )}
        </div>

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800 ">
            Items : <span>{totalQTY}</span>
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {TotalPrice}{' '}
          </h3>
          <hr className="w-[90vw] lg:w-[23vw] my-2 bg-gray-500" />
          <button
            onClick={() => navigate('/Success')}
            className="bg-green-500 cursor-pointer font-bold px-3 text-white py-2 rounded-lg w-full mb-5"
          >
            Check Out
          </button>
        </div>
      </section>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`bg-white cursor-pointer ${
          totalQTY > 0 && 'animate-bounce delay-500'
        } shadow-sm  text-5xl fixed bottom-4 right-4 rounded-full p-3`}
      />
    </>
  );
};

export default Cart;
