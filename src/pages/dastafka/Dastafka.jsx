import React, { useEffect } from "react";
import Curyer from "../curyer/Curyer";

const Dastafka = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Curyer />
    </div>
  );
};

export default Dastafka;
