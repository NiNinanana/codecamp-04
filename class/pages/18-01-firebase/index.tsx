import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // const board = collection(getFirestore(firebaseApp), "board");
    // await addDoc(board, {
    //   writer: "나야나",
    //   title: "줴목목목요일",
    //   contents: "내요용요용",
    // });
    const product = collection(getFirestore(firebaseApp), "product");
    await addDoc(product, {
      seller: "패파",
      name: "티비",
      price: 400,
    });
  };

  const onClickFetch = async () => {
    const product = collection(getFirestore(firebaseApp), "product");
    const result = await getDocs(product);
    const docs = result.docs.map((el) => el.data()); // el은
    console.log(docs);
  };

  return (
    <>
      <div>파이어베이스 연습 페이지!!!!!</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
