import React from "react";
import { Link } from "react-router-dom";
import { LiaCartPlusSolid } from "react-icons/lia";
const ProductCart = ({ products, handleAddToCart }) => {
  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className="p-3 h-[398px] overflow-hidden api border flex flex-col gap-4 items-center justify-center rounded-lg shadow-md relative"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt=""
          className="duration-300 image w-full  h-52 object-contain hover:scale-105 absolute top-0 left-0"
        />
      </Link>
      <div className="w-full h-52"></div>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-center text-xl font-semibold">{product.brand}</h3>
        <p className="text-red-500 text-sm font-medium ml-2">12%</p>
        <p className="desck">{product.description}</p>
        <p className="text-lg font-semibold ml-2">${product.price}</p>
      </div>
      <button className=" button w-12 border rounded-full bg-emerald-300 p-1 text-xs text-slate-100">
        New
      </button>
      <button className="btr w-9 h-9 rounded-full border-none bg-yellow-400 ">
        <LiaCartPlusSolid className="text-slate-100 text-2xl m-auto" />
      </button>
      <div className="ofset flex ">
        <button
          disabled={product.offset <= 0}
          onClick={() => handleAddToCart(product.id, false)}
          className="border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md"
        >
          -
        </button>
        <button className="w-10">{product.offset}</button>
        <button
          onClick={() => handleAddToCart(product.id)}
          className="border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md"
        >
          +
        </button>
      </div>
      <button
        onClick={() => handDelate(product.id)}
        className="w-full bg-red-600 text-[#fff]"
      >
        Delete
      </button>
    </div>
  ));
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center ">
      {productItem}
    </div>
  );
};

export default ProductCart;
