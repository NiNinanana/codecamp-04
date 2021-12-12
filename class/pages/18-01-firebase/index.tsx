import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  updateDoc,
  setDoc,
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
    // const product = collection(getFirestore(firebaseApp), "product");
    // await addDoc(product, {
    //   seller: "패파 직원",
    //   name: "티비",
    //   price: 5000000,
    //   contents: "더러워요",
    // });

    const bakeryClass = collection(getFirestore(firebaseApp), "class");
    await addDoc(bakeryClass, {
      patissier: "강남제오베이커리",
      className: "크리스마스 선물로 마카롱을 만들어 보아요!!",
      price: 36000,
      contents:
        "이제 크리스마스가 다가오고 있어요 여러분. 크리스마스를 맞아 저희 강남제오베이커리에서는 마카롱 클래스를 개설했습니다! 연인을 위해서, 또는 연인과 함께 마카롱을 만들어보아요~~",
      address: "서울 강남구 강남제오베이커리",
      category: "마카롱",
      reservation: {
        "12/12": ["1000~1200", "1400~1600"],
        "12/13": ["1400~1600"],
      },
    });

    // await setDoc(bakeryClass, {
    //   category: "쿠키",
    // });
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
