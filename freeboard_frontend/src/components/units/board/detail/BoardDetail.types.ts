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
  delete: any;
  likeCount: any;
  dislikeCount: any;
  list: any;
  update: any;
  dataYoutube: any;
  ddd: number;
  fff: boolean;
  commentData: any;
  deleteComment: (event: any) => void;
  createComment: (event: any) => void;
  commentWriter: (event: any) => void;
  commentContents: (event: any) => void;
  commentPassword: (event: any) => void;
}
