import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Form,
  LinkText,
  SubmitButton,
  ComponentWrapper,
  ParagraghText,
} from "../style/Style";
import { LoginProps } from "../utilis/types";

export const LoginForm = ({
  changeEmail,
  changePassword,
  handleSubmit,
  state,
}: LoginProps) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e, "signin")}>
      <ComponentWrapper>
        <ParagraghText>メールアドレス：</ParagraghText>
        <Input
          value={state.emailAddress}
          type="email"
          placeholder="メールアドレス"
          onChange={(e) => changeEmail(e, "signin")}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <ParagraghText>パスワード：</ParagraghText>
        <Input
          value={state.password}
          type="password"
          placeholder="パスワード"
          onChange={(e) => changePassword(e, "singin")}
        />
      </ComponentWrapper>
      <ComponentWrapper flexdirection="center">
        <Link to="/signup">新規登録はこちら</Link>
      </ComponentWrapper>
      <ComponentWrapper flexdirection="center">
        <LinkText>パスワードを忘れた方はこちら</LinkText>
      </ComponentWrapper>
      <SubmitButton type="submit">新規登録する</SubmitButton>
    </Form>
  );
};
