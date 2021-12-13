import { ChangeEvent, MouseEvent } from "react";

export interface IListItemProps {
  isSearch: boolean;
}

export interface IListItemUIProps {
  data: any;
  searchData: any;
  onClickDetail: (el: any) => (event: MouseEvent<HTMLSpanElement>) => void;
  create: () => void;
  searchContents: (event: ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
  onLoadMore: () => void;
  onLoadMoreSearch: () => void;
  list: () => void;
  basket: () => void;
  enterKey: () => void;
  isSearch: boolean;
}
