import { useForm } from "react-hook-form";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 동적으로 브라우저에서만 임포트

export default function WebEditorPage() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // register는 html태그에 밖에 못들어가기에 강제로 값을 넣어주는 것이다.

    trigger("contents");
    // onChange가 되었는지 안되었는지 react-hook-form에 알려준다
  };

  //   if (process.browser) {
  //     console.log("브라우저");
  //   } else {
  //     console.log("프론트엔드!!");
  //   }

  return (
    <>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </>
  );
}
