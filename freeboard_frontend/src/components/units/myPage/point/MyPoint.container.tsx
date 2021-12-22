import { useQuery } from "@apollo/client";
import MyPointUI from "./MyPoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./MyPoint.queries";

export default function MyPoint() {
  const { data: buyingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  const { data: loadingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: sellingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  return <MyPointUI />;
}
