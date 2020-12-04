import React from "react";
import Card from "./Card";

const Modal = ({ ans, setAns }) => {
  return (
    <div
      className="backdrop"
      onClick={() => {
        setAns(null);
      }}
    >
      <Card ans={ans} setAns={setAns} />
    </div>
  );
};

export default Modal;
