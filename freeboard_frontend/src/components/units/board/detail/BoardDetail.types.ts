import { ChangeEvent } from "react";

export interface IBoardDetailUIProps {
  dataTitle: string;
  dataWriter: string;
  dataContents: string;
  dataId: string;
  create: string;
  like: number;
  dislike: number;
  previous: () => void;
  next: () => void;
  delete: () => void;
  likeCount: () => void;
  dislikeCount: () => void;
  list: () => void;
  update: () => void;
  dataYoutube: any;
  ddd: number;
  fff: boolean;
  commentData: any;
  deleteComment: (event: ChangeEvent<HTMLInputElement>) => void;
  createComment: (event: ChangeEvent<HTMLInputElement>) => void;
  commentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  commentContents: (event: ChangeEvent<HTMLInputElement>) => void;
  commentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  dataAddress: string;
  updateComment: () => void;
  ggg: boolean;
  hhh: boolean;
  iii: boolean;
  dataImage: string[];
}
