import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import {Text} from "../../Text";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
      <Text fontSize={28} fontWeight={700}>
          pSwap
      </Text>
  );
};

export default Logo;
