import { useState, useEffect } from "react";
import { IBoard } from "../../../../commons/types/generated/types";
import ItemsBasketUI from "./ItemsBasket.presenter";

export default function ItemsBasket() {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  const onClickDelete = (event) => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "");
    const newBaskets = baskets.filter((el) => el._id !== event.target.id);
    localStorage.setItem("basket", JSON.stringify(newBaskets));
    alert("삭제되었습니다.");
    location.reload();
  };

  return <ItemsBasketUI basketItems={basketItems} delete={onClickDelete} />;
}
