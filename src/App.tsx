import { RegistrationForm } from "./view/RegistrationForm";
import { LoginForm } from "./view/LoginForm";
import { RegisterSuccessPage } from "./view/RegisterSuccessPage";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  signInWithEmailAndPassword,
} from "firebase/auth";
import { database } from "./firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

function App() {
  const [registerState, registerDispatch] = useReducer(
    registerReducer,
    initialRegisterValue
  );
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginValue
  );

  const navigate = useNavigate();

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
    } else {
      loginDispatch({
        type: "CHANGE_EMAIL",
        payload: e.target.value,
      });
    }
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
    } else {
      loginDispatch({
        type: "CHANGE_PASSWORD",
        payload: e.target.value,
      });
    }
  };

  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch({
      type: "CONFIRM_PASSWORD",
      payload: e.target.value,
    });
    console.log(e.target.value);
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    registerDispatch({
      type: "SUBMIT",
      payload: true,
    });

    console.log();
    if (authType === "signup") {
      registerUserInfo(registerState.emailAddress, registerState.password);
    } else {
      signinToMyPage(loginState.emailAddress, loginState.password);
    }

    // registerUserInfo(registerState.emailAddress, registerState.password);
    // if (authType === "signin") {
    //   signinToMyPage(registerState.emailAddress, registerState.password);
    // }
  };

  const registerUserInfo = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          addDoc(collection(database, "users"), {
            email: registerState.emailAddress,
            username: registerState.userName,
            icon: registerState.icon,
            gender: registerState.gender,
            dataOfBirth: registerState.dateOfBirth,
          });
        }
        console.log("user registered!!");
        setTimeout(() => {
          navigate("/registersuccess");
          registerDispatch({
            type: "SUBMIT",
            payload: true,
          });
        }, 2500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        registerDispatch({
          type: "SUBMIT",
          payload: true,
        });
      });
  };

  const signinToMyPage = async (email: string, password: string) => {
    // console.log(email, password);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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
          <Route path="/registersuccess" element={<RegisterSuccessPage />} />
        </Routes>
      </Div>
    </AppWrapper>
  );
}

export default App;
