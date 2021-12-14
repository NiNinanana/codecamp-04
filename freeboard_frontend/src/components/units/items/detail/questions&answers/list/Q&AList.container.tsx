import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import QNAListUI from "./Q&AList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./Q&AList.queries";

export default function QNALIST() {
  const router = useRouter();

  const { data: questionsData } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  return <QNAListUI questionsData={questionsData} />;
}
