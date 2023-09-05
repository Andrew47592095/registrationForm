import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Form,
  LinkText,
  Select,
  SubmitButton,
  RadioBtnWrapper,
  RadioInput,
  RadioLabel,
  RadioText,
  RadioWrapper,
  ComponentWrapper,
  ParagraghText
} from "../style/Style";
import { RegisterProps } from "../utilis/types";

export const RegistrationForm = ({
  state,
  selectIcon,
  changeUserName,
  changeEmail,
  changePassword,
  changeBirthday,
  confirmPassword,
  selectGender,
  agreeTermsAndCondition,
  handleSubmit,
}: RegisterProps) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <ComponentWrapper>
        <ParagraghText>ユーザー名：</ParagraghText>
        <Input
          type="text"
          placeholder="ユーザー名"
          onChange={(e) => changeUserName(e)}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <ParagraghText>メールアドレス：</ParagraghText>
        <Input
          type="email"
          placeholder="メールアドレス"
          onChange={(e) => changeEmail(e, "signup")}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <ParagraghText>パスワード：</ParagraghText>
        <Input
          type="password"
          placeholder="パスワード"
          onChange={(e) => changePassword(e, "singup")}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <ParagraghText>確認用パスワード：</ParagraghText>
        <Input
          type="password"
          placeholder="確認用パスワード"
          onChange={(e) => confirmPassword(e)}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <ParagraghText>アイコン：</ParagraghText>
        <Select name="icon" onChange={(e) => selectIcon(e)}>
          <option value="cat">🐱</option>
          <option value="dog">🐶</option>
          <option value="horse">🐴</option>
          <option value="pig">🐷</option>
          <option value="fox">🦊</option>
          <option value="monkey">🐵</option>
        </Select>
      </ComponentWrapper>
      <ComponentWrapper>
        <ParagraghText>生年月日：</ParagraghText>
        <Input type="date" onChange={(e) => changeBirthday(e)} />
      </ComponentWrapper>
      <ComponentWrapper>
        <RadioBtnWrapper>
          <ParagraghText>性別：</ParagraghText>
          <RadioWrapper>
            <RadioInput
              value="male"
              name="gender"
              type="radio"
              onChange={(e) => selectGender(e)}
            />
            <RadioLabel>
              <RadioText>男</RadioText>
            </RadioLabel>
          </RadioWrapper>
          <RadioWrapper>
            <RadioInput
              value="female"
              name="gender"
              type="radio"
              onChange={(e) => selectGender(e)}
            />
            <RadioLabel>
              <RadioText>女</RadioText>
            </RadioLabel>
          </RadioWrapper>
        </RadioBtnWrapper>
      </ComponentWrapper>
      <ComponentWrapper flexdirection={"center"}>
        <input
          type="checkbox"
          id="agreement"
          name="agreement"
          checked={state.agree}
          onChange={(e) => agreeTermsAndCondition(e)}
        />
        <LinkText href="https://menherasenpai.notion.site/457df49475494671807673a0a3346451">
          利用規約
        </LinkText>
        <label htmlFor="agreement">に同意します。</label>
      </ComponentWrapper>
      <ComponentWrapper flexdirection="center">
        <Link to="/signin">既にユーザー登録を完了している方はこちら</Link>
      </ComponentWrapper>
      <SubmitButton type="submit">新規登録する</SubmitButton>
    </Form>
  );
};
