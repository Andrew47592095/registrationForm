export type RegisterInfo = {
  userName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  icon: string;
  dateOfBirth: string;
  gender: string;
  agree: boolean;
};

export type LoginInfo = Pick<RegisterInfo, "emailAddress" | "password">;

export type LoginProps = {
  changeEmail: (
    e: React.ChangeEvent<HTMLInputElement>,
    authType: string
  ) => void;
  changePassword: (
    e: React.ChangeEvent<HTMLInputElement>,
    authType: string
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  state: Pick<RegisterInfo, "emailAddress" | "password">;
};

export type RegisterProps = {
  changeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEmail: (
    e: React.ChangeEvent<HTMLInputElement>,
    authType: string
  ) => void;
  changePassword: (
    e: React.ChangeEvent<HTMLInputElement>,
    authType: string
  ) => void;
  confirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectIcon: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeBirthday: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectGender: (e: React.ChangeEvent<HTMLInputElement>) => void;
  agreeTermsAndCondition: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  state: RegisterInfo;
};
