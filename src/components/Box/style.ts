import styled from "styled-components";
import { Rnd as RndBase } from "react-rnd";

export const Rnd = styled(RndBase)`
  z-index: 1;
  outline: #00ff72 solid 2px;
`;

export const Content = styled.div<{ image?: string; opacity: number }>`
  background-image: ${({ image }) => `url(${image})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: ${({ opacity }) => opacity};
`;

export const SmallBtn = styled.button`
  width: 30px;
  height: 30px;
  background: #437ebb;
  border: 0;
  overflow: hidden;
  border-radius: 4px;
  font-size: 0;
`;
