import React, { useState, useEffect } from "react";
import "./json.css";

import axios from "../../api/Index";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import ProductCart from "../product/ProductCart";
// const API_URL = "https://dummyjson.com";
const Json = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [semore, setSeemore] = useState(1);
  const [category, setCategorey] = useState(null);
  const [selectCategory, setSelectCategory] = useState("");
  const [total, setTotal] = useState(0);
  const handDelate = (id) => {
    const filterDelete = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filterDelete);
  };
  useEffect(() => {
    axios
      .get(`/products/category-list`)
      .then((res) => setCategorey(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(selectCategory);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products${selectCategory}`, {
        params: {
          limit: 8 * semore,
        },
      })
      .then((res) => {
        setTotal(res.data.total);
        setProducts(res.data.products.map((item) => ({ ...item, offset: 0 })));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [semore, selectCategory]);
  // console.log(products);
  const handleAddToCart = (id, positive = true) => {
    setProducts((prev) =>
      prev.map((item) => {
        return item.id === id
          ? { ...item, offset: positive ? item.offset + 1 : item.offset - 1 }
          : item;
      })
    );
  };
  const skeletonItems = new Array(8).fill().map((product, idx) => (
    <div className="p-4 border" key={idx}>
      {" "}
      <div className="w-full h-64 object-contain bg-slate-200"></div>
      <div className="h-4 bg-slate-200 w-full mt-3 rounded"></div>{" "}
      <div className="w-[200px] h-4 bg-slate-200 rounded mt-3"></div>{" "}
      <div className="w-[150px] h-4 bg-slate-200 mt-3 rounded"></div>
    </div>
  ));

  const categoreyItems = category?.map((categorys) => (
    <li
      key={categorys}
      data-value={`/category/${categorys}`}
      className="border py-1 px-2 rounded-full bg-[#ddd] mb-5 "
      onClick={(e) => setSelectCategory(e.target.dataset.value)}
    >
      {categorys}
    </li>
  ));
  return (
    <div className="container mx-auto mb-16 px-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-5 sm:mb-10">
        <p className="text-2xl sm:text-3xl font-bold">
          Скидки <b className="text-red-600">%</b>
        </p>
        <p className="text-sm sm:text-base text-slate-600">
          Все товары в категории
        </p>
      </div>
      <ul
        onChange={(e) => setSelectCategory(e.target.value)}
        className=" cursor-pointer flex overflow-x-auto whitespace-nowrap gap-3 mb-10"
      >
        <li
          data-value={``}
          className="border py-1 px-2 rounded-full bg-[#ddd] mb-5 "
          onClick={(e) => setSelectCategory(e.target.dataset.value)}
        >
          All
        </li>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
          {loading && skeletonItems}
        </div>
        {categoreyItems}
      </ul>
      <ProductCart
        products={products}
        handDelate={handDelate}
        handleAddToCart={handleAddToCart}
      />

      {8 * semore <= total ? (
        <button
          onClick={() => setSeemore((p) => p + 1)}
          className="w-full border-none bg-lime-600 rounded-md py-2 mt-10 text-[#fff] text-[18px]"
        >
          See more ({total - 8 * semore})
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Json;
