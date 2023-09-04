import styled from "styled-components";

export const AppWrapper = styled.div`
  background: linear-gradient(45deg, #08aeea, #b721ff);
  padding: 10px 100px 50px 100px;
  display: flex;
  justify-content: center;
  min-height: 680px;
  font-size: 16px;
`;

export const Div = styled.div`
  width: 900px;
  display: flex;
`;

export const ComponentWrapper = styled.div<{ justifycontent?: string }>`
  width: 800px;
  margin-top: 30px;
  display: flex;
  justify-content: ${(props) =>
    props.justifycontent ? "center" : "space-between"};
`;

export const Input = styled.input`
  height: 50px;
  width: 600px;
  background-color: #e5e5e5;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  line-height: 50px;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 5px 15px;
  width: 850px;
  min-height: 500px;
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
  width: 600px;
  background-color: #e5e5e5;
  border: none;
  outline: none;
  border-radius: 5px;
  line-height: 50px;
  cursor: pointer;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-left: 240px;
  cursor: pointer;
  user-select: none;
  // margin-left: 80px;
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
`;
