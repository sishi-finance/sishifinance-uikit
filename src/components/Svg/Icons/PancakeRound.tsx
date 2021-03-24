import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 205 205" {...props}>
      <image width="205" height="26" href='/images/egg/logo.png'/>
    </Svg>
  );
};

export default Icon;
