import { ChangeEvent } from "react";

export interface ISignUpUIProps {
  errorText: string;
  register: () => void;
  myNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  myEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  myPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checkMyPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
