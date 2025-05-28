import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decrementQTY, deleteFromCart, incrementQTY } from '../Slice/CartSlice';
import toast from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ItemCard = ({ id, image, price, title, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 bg-gray-50 shadow-sm p-3 rounded-md mb-3 items-center">
      <img
        src={image}
        alt={title}
        className="w-[60px] h-[60px] object-cover rounded-md"
      />

      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-semibold text-sm text-gray-800 line-clamp-1">
            {title}
          </h4>
          <MdDelete
            onClick={() => {
              dispatch(deleteFromCart({ id }));
              toast(`${title} Removed`, { icon: '🗑️' });
            }}
            className="text-lg text-gray-500 hover:text-red-500 cursor-pointer transition"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-green-600 font-medium text-sm">
            {' '}
            <small>Rs:</small> {price}
          </span>

          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() => dispatch(decrementQTY({ id }))}
              className="border p-1 rounded-md text-gray-600 hover:bg-green-500 hover:text-white cursor-pointer transition"
            />
            <span className="font-medium text-sm">{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQTY({ id }))}
              className="border p-1 rounded-md text-gray-600 hover:bg-green-500 hover:text-white cursor-pointer transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
