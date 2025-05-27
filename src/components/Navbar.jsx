import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Slice/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex   justify-between flex-col lg:flex-row gap-2 mx-6 py-3  mb-10  ">
      <div>
        <h3 className="text-xl font-bold text-gray-500">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h3 className="text-2xl font-bold">Flavoro Foods</h3>
      </div>
      <div>
        <input
          className="p-3 border border-gray-400 rounded outline-none mt-2 lg:mt-0 w-full lg:w-80"
          type="search"
          name="search"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search here"
        />
      </div>
    </nav>
  );
};

export default Navbar;
