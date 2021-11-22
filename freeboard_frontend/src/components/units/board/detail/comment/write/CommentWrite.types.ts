import { ChangeEvent } from "react";

export interface ICommentWriteProps {
  isEdit: boolean;
}

export interface ICommentWriteUIProps {
  createComment: (evevnt: ChangeEvent<HTMLInputElement>) => void;
  commentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  commentContents: (event: ChangeEvent<HTMLInputElement>) => void;
  commentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  updateComment: () => void;
  isEdit: boolean;
  test: string;
  writer: string;
  password: string;
  contents: string;
  el: any;
}
