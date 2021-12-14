import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [myLoadedImage, setMyLoadedImage] = useState("");
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image(); // 이 img는 태그임
    img.src = `https://codebootcamp.co.kr/images/main/homeImage1.webp`;
    img.onload = () => {
      setMyLoadedImage(img); // 태그를 state에 넣은 것
    };
  }, []);

  const onClickButton = () => {
    divRef.current?.appendChild(myLoadedImage);
  };

  return (
    <>
      <h1>환영합니다</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
      {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> */}
    </>
  );
}
