import { useState, useEffect, MouseEvent } from "react";
import ItemsBasketUI from "./ItemsBasket.presenter";

export default function ItemsBasket() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  const onClickDelete = (event: MouseEvent<HTMLSpanElement>) => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "");
    const newBaskets = baskets.filter((el: any) => el._id !== event.target.id);
    localStorage.setItem("basket", JSON.stringify(newBaskets));
    alert("삭제되었습니다.");
    location.reload();
  };

  return <ItemsBasketUI basketItems={basketItems} delete={onClickDelete} />;
}
