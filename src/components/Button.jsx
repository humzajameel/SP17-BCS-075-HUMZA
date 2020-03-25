import React from "react"
import "./Button.css"


const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const isConstantBtn = (val) => {
  val = val.trim();
  return (val === "DEL" || val === "C" || val === "Ans");
};

export const Button = (props) => (
  <div
    className={
      `button-wrapper
      ${!isOperator(props.children) ? "operator" : ""}
      ${isConstantBtn(props.children) ? 'special-operation': ''} `
    }
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
