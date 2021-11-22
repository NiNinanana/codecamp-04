import { MouseEvent } from "react";

export interface INavigationUIProps {
  isFree: boolean;
  isCarrot: boolean;
  isMyPage: boolean;
  isCat: boolean;
  clickFree: MouseEvent<HTMLAnchorElement, MouseEvent>;
}
