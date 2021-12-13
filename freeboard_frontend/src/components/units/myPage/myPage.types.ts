export interface IMyPageUIProps {
  plus: () => void;
  detailItem: (el: any) => () => void;
  soldData: any;
}

export interface IMyPageStylesProps {
  isSoldOut: boolean;
}
