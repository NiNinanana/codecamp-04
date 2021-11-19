import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { BoardWriteProps, IUpdateTemp } from "./BoardWrite.types";
import { Modal } from "antd";
// import {} from "@material-ui/lab/Alert";

export default function BoardWrite(props: BoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");

  const [errorWriter, setErrorWriter] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorContent, setErrorContent] = useState<string>("");

  const [buttonCheck, setButtonCheck] = useState<boolean>(false);

  function first(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setErrorWriter("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      content !== ""
    ) {
      setButtonCheck(true);
    } else {
      setButtonCheck(false);
    }
  }
  function second(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setErrorPassword("");
    }
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      content !== ""
    ) {
      setButtonCheck(true);
    } else {
      setButtonCheck(false);
    }
  }
  function third(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setErrorTitle("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      content !== ""
    ) {
      setButtonCheck(true);
    } else {
      setButtonCheck(false);
    }
  }
  function fourth(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setErrorContent("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setButtonCheck(true);
    } else {
      setButtonCheck(false);
    }
  }

  function fifth(event: ChangeEvent<HTMLInputElement>) {
    setYoutube(event.target.value);
  }

  async function upload() {
    try {
      console.log(writer);
      console.log(password);
      console.log(title);
      console.log(content);

      if (writer.length < 1) {
        setErrorWriter("작성자를 입력하세요.");
      }
      if (password.length < 1) {
        setErrorPassword("비밀번호를 입력하세요.");
      }
      if (title.length < 1) {
        setErrorTitle("제목을 입력하세요.");
      }
      if (content.length < 1) {
        setErrorContent("내용을 입력하세요.");
      }

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: content,
            youtubeUrl: youtube,
          },
        },
      });
      console.log(result.data);
      Modal.success({
        content: "게시물이 등록되었습니다.",
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert("오류");
    }
  }

  const update = async () => {
    try {
      const updateTemp: IUpdateTemp = {
        updateBoardInput: {},
        password,
        boardId: router.query.myId,
      };

      if (title !== "") updateTemp.updateBoardInput.title = title;
      if (content !== "") updateTemp.updateBoardInput.contents = content;
      if (youtube !== "") updateTemp.updateBoardInput.youtubeUrl = youtube;

      const result = await updateBoard({
        variables: updateTemp,
      });

      router.push(`/boards/${router.query.myId}`);

      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <BoardWriteUI
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        fifth={fifth}
        errorWriter={errorWriter}
        errorPassword={errorPassword}
        errorTitle={errorTitle}
        errorContent={errorContent}
        upload={upload}
        update={update}
        upup={buttonCheck}
        data={data}
        youtube={youtube}
        isEdit={props.isEdit}
      />
    </>
  );
}
