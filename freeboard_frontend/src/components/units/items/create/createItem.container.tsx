import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import CreateItemUI from "./createItem.presenter";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./createItem.queries";
import { IcreateItemProps } from "./CreateItem.types";

export default function CreateItem(props: IcreateItemProps) {
  const router = useRouter();
  const [myInputs, setMyInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
    // images: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateItem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [images, setImages] = useState([""]);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.myId },
  });

  const onChangeMyInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      name: myInputs.name,
      remarks: myInputs.remarks,
      contents: myInputs.contents,
      price: myInputs.price,
      // images: myInputs.images,
      [event.target.name]: event.target.value,
    });
    // setMyInputs({
    //   name: myInputs.name,
    //   remarks: myInputs.remarks,
    //   contents: myInputs.contents,
    //   price: Number(myInputs.price),
    // });
  };

  const onChangeMyInputsPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      name: myInputs.name,
      remarks: myInputs.remarks,
      contents: myInputs.contents,
      // images: myInputs.images,
      price: Number(event.target.value),
    });
  };

  const onClickItemUpload = async () => {
    console.log(myInputs);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...myInputs,
            images,
            useditemAddress: {
              address: myAddress,
            },
          },
        },
      });
      console.log("resultresultresult", result.data);
      router.push(`/items/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickItemUpdate = async () => {
    try {
      const updateTemp = {
        updateUseditemInput: {
          name: "",
          remarks: "",
          contents: "",
          price: 0,
        },
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

      await updateItem({
        variables: updateTemp,
      });
      router.push(`/items/${router.query.myId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeUploadImage = async (event) => {
    alert("event.target.id");
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      setImages((prev) => [...prev, result.data?.uploadFile.url]);
      console.log("내이미지파일", images);
      // setImages(myFile.url);
      alert("성공");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  console.log(images);

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    // setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CreateItemUI
      data={data}
      isEdit={props.isEdit}
      itemUpload={onClickItemUpload}
      myInputs={onChangeMyInputs}
      myInputsPrice={onChangeMyInputsPrice}
      itemUpdate={onClickItemUpdate}
      uploadImage={onChangeUploadImage}
      handleComplete={handleComplete}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      myAddress={myAddress}
    />
  );
}
