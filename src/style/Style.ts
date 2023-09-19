import styled from "styled-components";
import { breakpoints } from "./breakPoint";

export const AppWrapper = styled.div`
  background: linear-gradient(45deg, #08aeea, #b721ff);

  display: flex;
  justify-content: center;
  min-height: 680px;

  @media screen and (min-width: ${breakpoints.phone}) {
    font-size: 14px;
    padding: 5px 15px 5px 15px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 16px;
    padding: 10px 100px 50px 100px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 600px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 900px;
  }
`;

export const ComponentWrapper = styled.div<{
  flexdirection?: string;
  margintop?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: ${(props) => (props.flexdirection ? "center" : "column")};

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 350px;
    margin-top: 8px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 450px;
    margin-top: ${(props) => (props.margintop ? props.margintop : "30px")};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

export const Input = styled.input`
  background-color: #e5e5e5;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  line-height: 50px;
  padding: 0 15px;
  box-sizing: border-box;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  min-height: 500px;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 600px;
    padding: 15px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 850px;
    padding: 25px;
  }
`;
export const SubmitButton = styled.button`
  height: 50px;
  width: 250px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #ff4b5a;
  color: #fff;
  margin-top: 20px;
`;

export const Select = styled.select`
  height: 50px;
  background-color: #e5e5e5;
  border: none;
  outline: none;
  border-radius: 5px;
  line-height: 50px;
  cursor: pointer;
  padding: 0 15px;
  box-sizing: border-box;

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

export const RadioBtnWrapper = styled.div`
  display: flex;
  // margin-top: 15px;

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 350px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 450px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-right: 100px;
  cursor: pointer;
  user-select: none;

  @media screen and (min-width: ${breakpoints.phone}) {
    margin-left: 100px;
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + span::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ff4b5a;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioLabel = styled.span`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const RadioText = styled.span`
  font-size: 16px;
  margin-left: 25px;
  display: inline-block;
  width: 100px;
`;

export const LinkText = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff4b5a;
  }
`;

export const ParagraghText = styled.p`
  font-weight: 600;
  text-align: left;
`;