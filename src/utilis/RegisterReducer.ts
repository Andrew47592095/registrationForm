import { RegisterInfo } from "./types";

const initialRegisterValue = {
  userName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
  icon: "",
  dateOfBirth: "",
  gender: "",
  agree: false,
  isSubmitted: false
};

const registerReducer = (userInfo: RegisterInfo, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return { ...userInfo, userName: action.payload };
    case "CHANGE_EMAIL":
      return { ...userInfo, emailAddress: action.payload };
    case "CHANGE_PASSWORD":
      return { ...userInfo, password: action.payload };
    case "CONFIRM_PASSWORD":
      return { ...userInfo, confirmPassword: action.payload };
    case "SELECT_ICON":
      return { ...userInfo, icon: action.payload };
    case "CHANGE_BIRTHDAY":
      return { ...userInfo, dateOfBirth: action.payload };
    case "SELECT_GENDER":
      return { ...userInfo, gender: action.payload };
    case "AGREE_TERMS_CONDITION":
      return { ...userInfo, agree: action.payload };
    case "SUBMIT":
      return { ...userInfo, isSubmitted: true };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { initialRegisterValue, registerReducer };
