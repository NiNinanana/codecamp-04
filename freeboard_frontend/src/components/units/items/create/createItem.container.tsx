import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateItemUI from "./createItem.presenter";
import { CREATE_USED_ITEM } from "./createItem.queries";

export default function CreateItem() {
  const router = useRouter();
  const [myInputs, setMyInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

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

  return (
    <CreateItemUI
      itemUpload={onClickItemUpload}
      myInputs={onChangeMyInputs}
      myInputsPrice={onChangeMyInputsPrice}
    />
  );
}
