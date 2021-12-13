import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  CREATE_BOARD,
  FETCH_BOARD,
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateTemp } from "./BoardWrite.types";
import { Modal } from "antd";
// import {} from "@material-ui/lab/Alert";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  // const fileRef = useRef<HTMLInputElement>(null);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [images, setImages] = useState([""]);

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

  const onChangeUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    alert("고고");
    const file = event.target.files?.[0];
    // console.log(myFile);
    try {
      const result = await uploadFile({ variables: { file } });
      setImages(result.data?.uploadFile.url);
      // setImages(myFile.url);
      console.log(result.data.uploadFile);
      alert("성공");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  async function upload() {
    try {
      console.log(images);

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
            images: images,
            // boardAddress: myAddress,
          },
        },
      });
      console.log(result.data);
      Modal.success({
        content: "게시물이 등록되었습니다.",
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      if (error instanceof Error) alert(error.message);
    }
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
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
        myAddress={myAddress}
        handleComplete={handleComplete}
        onToggleModal={onToggleModal}
        isOpen={isOpen}
        myZoneCode={myZonecode}
        uploadImage={onChangeUploadImage}
        images={images}
        // dragger={onChangeDragger}
      />
    </>
  );
}
