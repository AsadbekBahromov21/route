import React from "react";
import { useEffect } from "react";
import Asadbek from "../../assets/asadbek.jpg";
const CreateProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col overflow-hidden">
      <div className=" flex flex-col gap-5">
        <div className="w-[200px] h-[200px] rounded-full flex m-auto">
          <img
            className="w-[200px] h-[200px] rounded-full object-contain"
            src={Asadbek}
            alt=""
          />
        </div>
        <div className="flex justify-between mt-52">
          <div className="">
            <p className="text-[12px] text-lime-500">Imya:</p>
            <div className="border w-[150px] pl-1 text-[#0009]">
              {" "}
              <p>Bahromov.A</p>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-[500]">Parol:</p>
            <input
              value={12345678}
              className="py-[4px] bg-inherit border pl-2 outline-none  "
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
