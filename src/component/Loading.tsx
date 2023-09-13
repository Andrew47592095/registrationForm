import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../style/breakPoint";

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(700px);
  }

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 350px;
    height: 40px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 450px;
    height: 50px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

export const LoadingWrapper = styled.div`
  height: 6px;
  position: relative;
  display: flex;

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 350px;
    height: 40px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    left: -20px;
    top: -15px;
    width: 600px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    left: -20px;
    top: -25px;
    width: 850px;
  }
`;

export const Indicator = styled.span`
  border: #ff4b5a;
  border-width: 1px;
  background-color: #ff4b5a;
  border-radius: 30px;
  display: inline-block;
  animation-name: ${slide};
  animation-iteration-count: infinite;

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 150px;
    height: 4px;
    animation-duration: 2.5s;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 200px;
    height: 6px;
    animation-duration: 2s;
  }
`;

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Indicator />
    </LoadingWrapper>
  );
};
