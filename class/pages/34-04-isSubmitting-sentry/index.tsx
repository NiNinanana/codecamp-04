import { ChangeEvent, useCallback, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import * as Sentry from "@sentry/nextjs";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const INPUTSINIT = {
  writer: "",
  title: "",
  contents: "",
  password: "",
};

export default function IsSubmittingPage() {
  const { formState } = useForm();
  // formState.isSubmitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputs, setInputs] = useState(INPUTSINIT);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInput = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    },
    []
  );

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      throw new Error("에러 발생!!!!!!!!");
      // const result = await createBoard({
      //   variables: {
      //     createBoardInput: { ...inputs },
      //   },
      // });
      // console.log(result);
      // console.log("성공");
      // //   Modal.success({ content: "등록에 성공하였습니다." });
      // //   router.push 로 다이나믹 라우팅 result.data.createBoard._id
      // setIsSubmitting(false); // 연속 클릭 방지!!!
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      Sentry.captureException(error);
    }
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeInput("writer")} />
      비밀번호: <input type="password" onChange={onChangeInput("password")} />
      제목: <input type="text" onChange={onChangeInput("title")} />
      내용: <input type="text" onChange={onChangeInput("contents")} />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </>
  );
}
