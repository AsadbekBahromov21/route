import React, { useEffect, useState } from "react";
import "./header.css";
import navlogo from "../../assets/nav.png";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const API_URL = "https://dummyjson.com";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchRes, setSearchRes] = useState(null);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    search.trim().length >= 3
      ? axios
          .get(`${API_URL}/products/search`, {
            params: {
              q: search,
            },
          })
          .then((res) => setSearchRes(res.data))
          .catch((err) => console.log(err))
      : setSearchRes(null);
  }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const links = ["Каталог", "Доставка", " Условия", "Контакты"];
  const number = ["+ 375 736 463 64 72  /+ 375 736 463 64 72"];
  return (
    <div className="header bg-slate-200 mb-32 ">
      <div className="container mx-auto ">
        <nav className="navbar py-5 flex items-center justify-between">
          <div className="navbar__logo">
            <img src={navlogo} alt="" />
          </div>
          <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar__collection flex gap-7">
              <NavLink className={"text-[#000] "} to={"/"}>
                Home
              </NavLink>
              <NavLink className={"text-[#000] "} to={"/Каталог"}>
                Каталог
              </NavLink>
              <NavLink className={"text-[#000] "} to={"/Доставка"}>
                Доставка
              </NavLink>
              <NavLink className={"text-[#000] "} to={"/Условия"}>
                Условия
              </NavLink>
              <NavLink className={"text-[#000] "} to={"/Контакты"}>
                Контакты
              </NavLink>
              <NavLink className={"text-[#000] "} to={"/login"}>
                Login
              </NavLink>
            </ul>
          </div>
          <div className="div">
            <div className="relative hidden sm:block">
              <div className="flex items-center w-[210px] bg-[#fff] rounded-lg">
                <input
                  className="border-none py-3 outline-none pl-1 rounded-lg "
                  placeholder="Search"
                  type="text"
                  value={search}
                  onChange={searchHandler}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => {
                    setSearchFocus(false);
                    setSearch("");
                  }}
                />
                <IoSearchOutline />
              </div>
              <div
                className={`absolute top-[50px] left-0 w-[210px] p-4 bg-[#fff] h-[150px] bg-[#eee] overflow-y-scroll ${
                  searchFocus ? "" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-4 ml-1 text-[13px] ">
                  {searchRes?.products?.map((product) => product.title)}
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar__number  flex-col text-base font-medium ">
            {number?.map((el, index) => (
              <li key={index} className="navbar__item list-none">
                <a href="#">
                  <span>{el}</span>
                </a>
              </li>
            ))}
            <p className="text-end font-extralight text-sm">Заказать звонок</p>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
