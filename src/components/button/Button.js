import React from "react";
import { Btn } from "./Button.styles";

const Button = ({ link, text }) => {
  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
      </a>
    </Btn>
  );
};

export default Button;
