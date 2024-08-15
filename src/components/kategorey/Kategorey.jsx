import React from "react";
import divan from "../../assets/divan.png";
import divan1 from "../../assets/rasm1.png";
import divan2 from "../../assets/rasm3.png";
import divan3 from "../../assets/rasm2.png";
import divan4 from "../../assets/rasm7.png";
import divan5 from "../../assets/rasm.png";
import divan6 from "../../assets/rasm8.png";
import divan7 from "../../assets/rasm9.png";
import divan8 from "../../assets/rasm6.png";
import divan9 from "../../assets/rasm5.png";
const box = [
  {
    id: 1,
    url: divan,
    title: "Диваны",
  },
  {
    id: 2,
    url: divan1,
    title: "Спальная",
  },
  {
    id: 3,
    url: divan2,
    title: "Кухня",
  },
  {
    id: 4,
    url: divan3,
    title: "Для сада",
  },
  {
    id: 5,
    url: divan4,
    title: "Мебель",
  },
  {
    id: 6,
    url: divan5,
    title: "Гигиена",
  },
  {
    id: 7,
    url: divan6,
    title: "Товары для отдыха",
  },
  {
    id: 8,
    url: divan7,
    title: "Зеркала",
  },
  {
    id: 9,
    url: divan8,
    title: "Зеркала",
  },
  {
    id: 10,
    url: divan9,
    title: "Кухня и бытовая тех..",
  },
];
const Kategorey = () => {
  return (
    <div className="kategorey">
      <div className="container mx-auto ">
        <div className="Name flex flex-col md:flex-row gap-5 items-center md:items-end mb-5 md:mb-10">
          <p className="text-2xl md:text-4xl font-bold info">
            Популярные категории
          </p>
          <p className="text-sm md:text-base">Все категории</p>
        </div>

        <div className="flex gap-4 flex-wrap mb-10 items-center justify-center">
          {box?.map((el) => (
            <div
              key={el.id}
              className="h-52  flex flex-col gap-3 p-4 border items-center justify-center rounded-3xl rounded hover:rounded-lg shadow shadow-blue-500/40  w-60 relative"
            >
              <img className="hover:scale-105 m-auto" src={el.url} alt="" />
              <p className=" text-center mt-3 absolute bottom-2">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kategorey;
