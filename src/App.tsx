import { RegistrationForm } from "./view/RegistrationForm";
import { LoginForm } from "./view/LoginForm";
import { Routes, Route } from "react-router-dom";
import { AppWrapper, Div } from "./style/Style";
import {
  initialRegisterValue,
  registerReducer,
} from "./utilis/RegisterReducer";
import { initialLoginValue, loginReducer } from "./utilis/LoginReducer";
import { auth } from "./firebase/firebase";
import { useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";

function App() {
  const [registerState, registerDispatch] = useReducer(
    registerReducer,
    initialRegisterValue
  );
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginValue
  );

  const chnageUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch({
      type: "CHANGE_USERNAME",
      payload: e.target.value,
    });
  };

  const changeEmail = (
    e: React.ChangeEvent<HTMLInputElement>,
    authType: string
  ) => {
    if (authType === "signup") {
      registerDispatch({
        type: "CHANGE_EMAIL",
        payload: e.target.value,
      });
    }
    loginDispatch({
      type: "CHANGE_EMAIL",
      payload: e.target.value,
    });
  };

  const changePassword = (
    e: React.ChangeEvent<HTMLInputElement>,
    authType: string
  ) => {
    if (authType === "signup") {
      registerDispatch({
        type: "CHANGE_PASSWORD",
        payload: e.target.value,
      });
    }
    loginDispatch({
      type: "CHANGE_PASSWORD",
      payload: e.target.value,
    });
  };

  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch({
      type: "CONFIRM_PASSWORD",
      payload: e.target.value,
    });
  };

  const selectIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch({
      type: "SELECT_ICON",
      payload: e.target.value,
    });
  };

  const agreeTermsAndCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch({
      type: "AGREE_TERMS_CONDITION",
      payload: e.target.checked,
    });
  };

  const selectGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    registerDispatch({
      type: "SELECT_GENDER",
      payload: e.target.value,
    });
  };

  const changeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    registerDispatch({
      type: "CHANGE_BIRTHDAY",
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent, authType: string) => {
    e.preventDefault();

    if (authType === "signup") {
      registerDispatch({
        type: "SUBMIT",
        userInfo: registerState,
      });
    }

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //   auth,
    //   registerState.emailAddress,
    //   registerState.password
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(registerState);

    onSubmit(registerState.emailAddress, registerState.password);
  };

  const onSubmit = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
  };

  return (
    <AppWrapper>
      <Div>
        <Routes>
          <Route
            path="/signup"
            element={
              <RegistrationForm
                state={registerState}
                changeUserName={chnageUserName}
                changeEmail={changeEmail}
                changePassword={changePassword}
                confirmPassword={confirmPassword}
                selectGender={selectGender}
                agreeTermsAndCondition={agreeTermsAndCondition}
                selectIcon={selectIcon}
                changeBirthday={changeBirthday}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <LoginForm
                state={loginState}
                changeEmail={changeEmail}
                changePassword={changePassword}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </Div>
    </AppWrapper>
  );
}

export default App;
