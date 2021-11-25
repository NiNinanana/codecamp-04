import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPage() {
  const [myImages, setMyImages] = useState<string[]>([]);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      writer: myInputs.writer,
      password: myInputs.password,
      title: myInputs.title,
      contents: myInputs.contents,
      [event.target.name]: event.target.value,
    });
  };

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    // const myFile = event.target.files[0];
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다.");
      return;
    }

    if (myFile?.size > 5 * 1024 * 1024) {
      // 5 메가바이트
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }

    if (!myFile?.type.includes("jpeg") && !myFile?.type.includes("png")) {
      alert("jpeg 또는 png 형식만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data?.uploadFile.url);
    setMyImages([result.data?.uploadFile.url]);
  }

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...myInputs,
          images: myImages,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <h1>이미지 업로드</h1>
      작성자:{" "}
      <input
        type="text"
        name="writer"
        placeholder="작성자를 입력하세요"
        onChange={onChangeInputs}
      />
      <br />
      비밀번호:{" "}
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        onChange={onChangeInputs}
      />
      <br />
      제목:{" "}
      <input
        type="text"
        name="title"
        placeholder="제목을 입력하세요"
        onChange={onChangeInputs}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        name="contents"
        placeholder="내용을 입력하세요"
        onChange={onChangeInputs}
      />
      <br />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
