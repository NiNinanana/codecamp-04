import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IUseditem } from "../../../../commons/types/generated/types";
import DetailItemUI from "./DetailItem.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USER_LOGGED_IN,
} from "./DetailItem.queries";

export default function DetailItem() {
  const router = useRouter();
  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickUpdate = () => {
    router.push(`/items/${router.query.myId}/edit`);
  };
  const onClickList = () => {
    router.push(`/items/list`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUsedItem({
        variables: { useditemId: router.query.myId },
      });
      alert("삭제되었습니다.");
      router.push(`/items/list`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickBasket = () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExists = false;

    baskets.forEach((basketEl: IUseditem) => {
      if (data.fetchUseditem._id === basketEl._id) isExists = true;
    });

    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }

    baskets.push(data.fetchUseditem);

    localStorage.setItem("basket", JSON.stringify(baskets));
    const basketConfirm = confirm(
      "장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?"
    );
    if (basketConfirm) router.push(`/items/basket`);
  };

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.myId,
        },
      });
      alert("구매가 완료되었습니다.");
      router.push(`/myPage`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickPick = async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: router.query.myId,
        },
      });
      console.log(result);
      alert("찜 목록에 담았습니다!");
    } catch (error) {
      alert("실패ㅜㅜㅜㅜㅜ");
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <DetailItemUI
      name={data?.fetchUseditem?.name}
      remarks={data?.fetchUseditem?.remarks}
      contents={data?.fetchUseditem?.contents}
      price={data?.fetchUseditem?.price}
      image={data?.fetchUseditem?.images}
      createdAt={data?.fetchUseditem?.createdAt}
      seller={data?.fetchUseditem?.seller}
      address={data?.fetchUseditem?.useditemAddress?.address}
      sellerName={data?.fetchUseditem?.seller.name}
      userData={userData}
      update={onClickUpdate}
      list={onClickList}
      delete={onClickDelete}
      basket={onClickBasket}
      buy={onClickBuy}
      pick={onClickPick}
    />
  );
}
