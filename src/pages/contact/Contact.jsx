import React from "react";
import Fon from "../fon/Fon";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Fon />
    </div>
  );
};

export default Contact;
