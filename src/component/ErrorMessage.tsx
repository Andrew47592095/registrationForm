import React from "react";
import styled from "styled-components";
import { breakpoints } from "../style/breakPoint";

type Props = {
  errorMsg: string;
};

const ErrorText = styled.p`
  height: 1px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: red;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 450px;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

export const ErrorMessage = (props: Props) => {
  return <ErrorText>{props.errorMsg}</ErrorText>;
};
