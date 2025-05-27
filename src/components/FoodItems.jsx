import React from 'react';
import FoodCard from './FoodCard';
import FoodData from './../../Data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added : ${name}`);
  const storeCategory = useSelector((store) => store.category.category);
  const search = useSelector((state) => state.search.search);
  const searchCase = (food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-7 flex flex-wrap w-full gap-9  items-center justify-center lg:justify-start lg:items-start pr-11 my-10">
        {FoodData.filter((food) => {
          if (storeCategory === 'All') {
            return searchCase(food);
          } else {
            return food.category === storeCategory && searchCase(food);
          }
        }).map((SingleFood, index) => {
          return (
            <FoodCard
              id={SingleFood.id}
              title={SingleFood.name}
              image={SingleFood.img}
              description={SingleFood.desc}
              rating={SingleFood.rating}
              price={SingleFood.price}
              key={index}
              handleToast={handleToast}
            />
          );
        })}
        <p className="text-sm text-gray-400">Made with ❤️ by Arman Ihsan</p>
      </div>
    </>
  );
};

export default FoodItems;
