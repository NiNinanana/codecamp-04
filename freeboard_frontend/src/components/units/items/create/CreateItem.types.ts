import { ChangeEvent } from "react";

export interface IcreateItemProps {
  isEdit: boolean;
}

export interface ICreateItemUIProps {
  data: any;
  isEdit: boolean;
  itemUpload: () => void;
  myInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  myInputsPrice: (event: ChangeEvent<HTMLInputElement>) => void;
  itemUpdate: () => void;
  uploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
}
