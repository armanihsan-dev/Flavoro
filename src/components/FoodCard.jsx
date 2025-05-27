import { FaStar } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice/CartSlice';

const FoodCard = ({
  id,
  image,
  title,
  description,
  price,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] h-[300px] bg-white p-4 flex flex-col rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <img
        className="w-full h-[150px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
        src={image}
        alt={title}
      />

      <div className="flex flex-col justify-between flex-grow mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-[14px] leading-tight line-clamp-2 w-[140px]">
            {title}
          </h3>
          <span className="text-green-500 text-sm">
            <small>Rs:</small> <b>{price}</b>
          </span>
        </div>

        <p className="text-[10px] font-light mt-2 line-clamp-2 text-gray-600">
          {description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="flex items-center gap-1 text-yellow-500 text-sm ">
            <FaStar className="mb-[2px]" /> {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, title, price, rating, image }));
              handleToast(title);
            }}
            className="px-2 py-1 text-white bg-green-500 hover:bg-green-600 text-xs rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
