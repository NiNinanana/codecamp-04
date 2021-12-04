import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateItemUI from "./createItem.presenter";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USEDITEM,
} from "./createItem.queries";

export default function CreateItem(props) {
  const router = useRouter();
  const [myInputs, setMyInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateItem] = useMutation(UPDATE_USEDITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.myId },
  });

  const onChangeMyInputs = (event) => {
    setMyInputs({
      name: myInputs.name,
      remarks: myInputs.remarks,
      contents: myInputs.contents,
      price: myInputs.price,
      [event.target.name]: event.target.value,
    });
    // setMyInputs({
    //   name: myInputs.name,
    //   remarks: myInputs.remarks,
    //   contents: myInputs.contents,
    //   price: Number(myInputs.price),
    // });
  };

  const onChangeMyInputsPrice = (event) => {
    setMyInputs({
      name: myInputs.name,
      remarks: myInputs.remarks,
      contents: myInputs.contents,
      price: Number(event.target.value),
    });
  };

  const onClickItemUpload = async () => {
    console.log(myInputs);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...myInputs },
        },
      });
      console.log(result.data);
      router.push(`/items/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickItemUpdate = async () => {
    try {
      const updateTemp = {
        updateUseditemInput: {},
        useditemId: router.query.myId,
      };
      if (myInputs.name !== "")
        updateTemp.updateUseditemInput.name = myInputs.name;
      if (myInputs.remarks !== "")
        updateTemp.updateUseditemInput.remarks = myInputs.remarks;
      if (myInputs.contents !== "")
        updateTemp.updateUseditemInput.contents = myInputs.contents;
      if (myInputs.price !== 0)
        updateTemp.updateUseditemInput.price = myInputs.price;

      const result = await updateItem({
        variables: updateTemp,
      });
      router.push(`/items/${router.query.myId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  console.log("data!!", data?.fetchUseditem);

  return (
    <CreateItemUI
      data={data}
      isEdit={props.isEdit}
      itemUpload={onClickItemUpload}
      myInputs={onChangeMyInputs}
      myInputsPrice={onChangeMyInputsPrice}
      itemUpdate={onClickItemUpdate}
    />
  );
}
