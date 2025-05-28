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
  const totalQTY = state.reduce((total, item) => total + item.qty, 0);
  const totalPrice = state.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <>
      {/* Cart Drawer */}
      <section
        className={`fixed right-0 top-0 bg-green-100 w-full flex flex-col lg:w-[25vw] h-full p-3 shadow-lg ${
          activeCart ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-500 z-50`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {/* Scrollable Item List */}
        <div className="flex-1 overflow-y-auto pr-1">
          {state.length > 0 ? (
            state.map((item, index) => (
              <ItemCard
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                qty={item.qty}
              />
            ))
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty!
            </h2>
          )}
        </div>

        {/* Fixed Footer Section */}
        <div className="bg-white mt-3 p-3 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-800 mb-1">
            Items: <span>{totalQTY}</span>
          </h3>
          <h3 className="font-semibold text-gray-800 mb-2">
            Total Amount: Rs {totalPrice}
          </h3>
          <hr className="border-t border-gray-300 mb-3" />
          <button
            onClick={() => navigate('/Success')}
            className="bg-green-500 cursor-pointer font-bold px-3 text-white py-2 rounded-lg w-full hover:bg-green-600 transition"
          >
            Check Out
          </button>
        </div>
      </section>

      {/* Floating Cart Button */}
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-5 right-5 text-4xl p-2 rounded-full bg-white shadow-lg  hover:bg-green-100 transition ${
          totalQTY > 0 && 'animate-bounce'
        }`}
      />
    </>
  );
};

export default Cart;
