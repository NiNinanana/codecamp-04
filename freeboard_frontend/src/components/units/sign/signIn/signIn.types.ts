import { ChangeEvent } from "react";

export interface ISignInUIProps {
  errorText: string;
  loginButton: () => void;
  myIdChange: (event: ChangeEvent<HTMLInputElement>) => void;
  myPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetPassword: () => void;
  signUP: () => void;
}
