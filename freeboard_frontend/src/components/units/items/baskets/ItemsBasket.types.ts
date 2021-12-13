import { MouseEvent } from "react";

export interface IItemsBasketUIProps {
  basketItems: never[];
  delete: (event: MouseEvent<HTMLSpanElement>) => void;
}
