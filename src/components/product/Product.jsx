import axios from "../../api/Index";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";
import ProductCart from "./ProductCart";
const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const handDelate = (id) => {
    const filterDelete = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filterDelete);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  const handleAddToCart = (id, positive = true) => {
    setProducts((prev) =>
      prev.map((item) => {
        return item.id === id
          ? { ...item, offset: positive ? item.offset + 1 : item.offset - 1 }
          : item;
      })
    );
  };
  const skeletonItems = new Array(4).fill().map((product, idx) => (
    <div className="p-4 border" key={idx}>
      {" "}
      <div className="w-full h-64 object-contain bg-slate-200"></div>
      <div className="h-4 bg-slate-200 w-full mt-3 rounded"></div>{" "}
      <div className="w-[200px] h-4 bg-slate-200 rounded mt-3"></div>{" "}
      <div className="w-[150px] h-4 bg-slate-200 mt-3 rounded"></div>
    </div>
  ));

  useEffect(() => {
    axios
      .get(`/products/category/${data?.category}`, { params: { limit: 4 } })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [data]);
  // console.log(data);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1 ">
        <div>
          {" "}
          <img
            className="w-[200px] m-auto mb-4 object-contain"
            src={data?.images[0]}
            alt=""
          />
          <div className="flex">
            {data?.images?.map((item, inx) => (
              <img
                className="w-[80px] h-[80px] object-contain m-auto"
                src={item}
                key={inx}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[18px] font-[600]">{data?.brand}</h2>
          <b className="text-[16px] font-[400]">
            {data?.meta.createdAt}/
            <b className="text-[16px] font-extralight">{data?.description}</b>
          </b>
          <div className="flex gap-[50px]">
            <p className="text-[18px] font-bold">Br{data?.price}</p>
            <div>
              <button className="w-[32px] border text-[18px] rounded">-</button>
              <button className="w-[50px]">0</button>
              <button className="w-[32px] border text-[18px] rounded">+</button>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="lg:py-[16px] bg-[#ff8a1e] cursor-pointer rounded-[32px] text-[#fff] lg:px-[98px] border py-[5px] px-[40px]">
              Добаить в корзину +
            </button>
            <button className="border px-3 rounded-full">
              <IoStarOutline className=" lg:text-[30px]" />
            </button>
            <button className="border px-3 rounded-full">
              <IoBarChartOutline className="lg:text-[30px]" />
            </button>
          </div>
          <p>{data?.description}</p>
          <hr />
          <div className="flex justify-between">
            <p className="font-[600]">{data?.sku}</p>
            <p>
              <IoArrowRedo />
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="font-[600]">{data?.rating}%</p>
            <p>
              <IoArrowRedo />
            </p>
          </div>
          <hr />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center ">
        {loading && skeletonItems}
      </div>
      <ProductCart
        products={products}
        handDelate={handDelate}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Product;
