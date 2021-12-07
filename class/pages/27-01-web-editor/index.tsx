// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 동적으로 브라우저에서만 임포트

export default function WebEditorPage() {
  const handleChange = (value) => {
    console.log(value);
  };

  //   if (process.browser) {
  //     console.log("브라우저");
  //   } else {
  //     console.log("프론트엔드!!");
  //   }

  return (
    <>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </>
  );
}
