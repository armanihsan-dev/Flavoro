import React, { useEffect, useState } from 'react';
import FoodData from './../../Data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Slice/CategorySlice';

const CategoryMenu = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const [Categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(['All', ...uniqueCategories]);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="mx-6 py-3 ">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-3 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {Categories.map((category) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={category}
              className={` ${
                selectedCategory === category && 'bg-green-400 text-white'
              } px-3 py-2 bg-gray-200 font-bold rounded-lg cursor-pointer hover:bg-green-500 hover:text-white`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
