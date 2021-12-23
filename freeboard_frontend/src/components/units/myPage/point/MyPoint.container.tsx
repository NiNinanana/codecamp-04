import { useQuery } from "@apollo/client";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useState } from "react";
import MyPointUI from "./MyPoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
  FETCH_USER_LOGGED_IN,
} from "./MyPoint.queries";

export default function MyPoint() {
  const router = useRouter();
  const [whatView, setWhatView] = useState(1);

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: buyingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  const { data: loadingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: sellingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  const { data: countBuyingData } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING
  );
  const { data: countLoadingData } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING
  );
  const { data: countSellingData } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  );

  const onClickBuying = () => {
    setWhatView(1);
  };
  const onClickSelling = () => {
    setWhatView(2);
  };
  const onClickLoading = () => {
    setWhatView(3);
  };

  const onClickDetailItem = (el) => () => {
    router.push(`/items/${el.useditem._id}`);
  };

  return (
    <MyPointUI
      userData={userData}
      buyingData={buyingData}
      loadingData={loadingData}
      sellingData={sellingData}
      countBuyingData={countBuyingData}
      countLoadingData={countLoadingData}
      countSellingData={countSellingData}
      buy={onClickBuying}
      sell={onClickSelling}
      load={onClickLoading}
      detailItem={onClickDetailItem}
      whatView={whatView}
    />
  );
}
