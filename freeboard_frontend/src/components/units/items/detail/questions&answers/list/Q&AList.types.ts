import { ChangeEvent, MouseEvent } from "react";

export interface IQNAListUIProps {
  questionsData: any;
  userData: any;
  itemData: any;
  isAnswer: boolean;
  isAnswerView: boolean;
  onClickOpen: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickClose: (event: MouseEvent<HTMLSpanElement>) => void;
  onChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAnswer: (event: MouseEvent<HTMLSpanElement>) => void;
}
