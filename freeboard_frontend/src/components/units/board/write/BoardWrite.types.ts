import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
}

export interface IBoardWriteUIProps {
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
  handleComplete: (data: any) => void;
  onToggleModal: () => void;
  isOpen: boolean;
  myZoneCode: string | number | readonly string[] | undefined;
  uploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
  images: string[];
}

export interface IUploadButtonProps {
  upup: boolean;
}

export interface IUpdateTemp {
  updateBoardInput: any;
  password: string;
  boardId: string | string[] | undefined;
}
