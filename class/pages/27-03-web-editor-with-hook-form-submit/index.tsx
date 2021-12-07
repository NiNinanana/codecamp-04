import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 동적으로 브라우저에서만 임포트

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
    }
  }
`;

interface FormValues {
  writer: string;
  title: string;
  password: string;
  contents: string;
}

export default function WebEditorReactHookFormSubmitPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

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

  const onClickSubmit = async (data: FormValues) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: data.password,
            password: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </form>
  );
}
