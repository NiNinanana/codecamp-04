import { MouseEvent, ChangeEvent, MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsListProps {
  isList: boolean;
  startDate: string | undefined;
}

export interface IBoardsListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  data2: any;
  data3: any;
  isList: boolean;
  justContents: MouseEventHandler<HTMLButtonElement>;
  delete: MouseEventHandler<HTMLButtonElement>;
  deleteBest: (event: ChangeEvent<HTMLInputElement>) => void;
  create: any;
  bestContents: MouseEventHandler<HTMLButtonElement>;
  search: () => void;
  main: () => void;
  searchBox: () => void;
  onClickSearch: () => void;
  write: () => void;
  onSearch: (value: string) => void;
  onChangeSearchBox: () => void;
  onChangeDate: (
    values: RangeValue<Moment>,
    formatString: [string, string]
  ) => void;
  startPage: number;
  lastPage: number;
  list: (event: MouseEvent<HTMLSpanElement>) => void;
  prevButton: () => void;
  nextButton: () => void;
}

export interface IBoardsListBestUIItemProps {
  el: any;
  bestContents: MouseEventHandler<HTMLButtonElement>;
}
export interface IBoardsListLastUIItemProps {
  el: any;
  justContents: MouseEventHandler<HTMLButtonElement>;
  delete: MouseEventHandler<HTMLButtonElement>;
}
export interface IBoardsListSearchUIProps {
  el: any;
  justContents: MouseEventHandler<HTMLButtonElement>;
  delete: MouseEventHandler<HTMLButtonElement>;
}
