import { LoginInfo } from "./types";

const initialLoginValue = {
  emailAddress: "",
  password: "",
};

const loginReducer = (userInfo: LoginInfo, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...userInfo, emailAddress: action.payload };
    case "CHANGE_PASSWORD":
      return { ...userInfo, password: action.payload };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { initialLoginValue, loginReducer };
