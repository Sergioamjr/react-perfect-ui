import React from "react";
import * as S from "./style";
import { BoxProps } from "./../../types";

const Box = ({ image, opacity, size, ...props }: BoxProps): JSX.Element => {
  if (!image) {
    return null;
  }
  return (
    <S.Rnd data-testid="unguessing-ui-box" size={size} {...props}>
      <S.Content
        data-opac={`opacity-${opacity}`}
        data-testid="unguessing-ui-image"
        opacity={opacity}
        image={image}
      />
    </S.Rnd>
  );
};

export default Box;
