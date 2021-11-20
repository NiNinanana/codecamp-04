import { ChangeEvent } from "react";

export interface BoardWriteProps {
  isEdit: boolean;
}

export interface BoardWriteUIProps {
  myAddress: string | number | readonly string[] | undefined;
  upup: boolean;
  isEdit: boolean;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContent: string;
  first: (event: ChangeEvent<HTMLInputElement>) => void;
  second: (event: ChangeEvent<HTMLInputElement>) => void;
  third: (event: ChangeEvent<HTMLInputElement>) => void;
  fourth: (event: ChangeEvent<HTMLInputElement>) => void;
  fifth: (event: ChangeEvent<HTMLInputElement>) => void;
  upload: () => void;
  update: () => void;
  data?: any;
  youtube: string;
}

export interface IUploadButtonProps {
  upup: boolean;
}

export interface IUpdateTemp {
  updateBoardInput: any;
  password: string;
  boardId: string | string[] | undefined;
}
