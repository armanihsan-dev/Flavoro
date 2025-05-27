import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decrementQTY, deleteFromCart, incrementQTY } from '../Slice/CartSlice';
import toast from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ItemCard = ({ id, image, price, title, qty }) => {
  const dispatch = useDispatch();

  const buttonStyle =
    'className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"';
  return (
    <section className="flex gap-3 bg-white shadow-md px-3 py-3 rounded-md mb-2 items-center">
      <div className="w-[60px] h-[60px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md "
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm line-clamp-1">{title}</h2>
          <MdDelete
            onClick={() => {
              dispatch(deleteFromCart({ id, image, price, title, qty }));
              toast(`${title} Removed!`, { icon: '👏' });
            }}
            className="cursor-pointer hover:text-red-500 transition text-lg"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-green-500 text-sm">
            Rs: <b>{price}</b>
          </h3>
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() => dispatch(decrementQTY({ id }))}
              className={buttonStyle}
            />
            <span className="font-semibold text-sm">{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQTY({ id }))}
              className={buttonStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
