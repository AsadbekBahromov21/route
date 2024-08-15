import React from "react";
import Mebels from "../mebels/Mebels";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Mebels />
    </div>
  );
};

export default About;
