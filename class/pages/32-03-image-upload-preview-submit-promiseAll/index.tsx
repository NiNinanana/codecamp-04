import { useMutation, gql } from "@apollo/client";
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

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFiles, setMyFiles] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(data.target?.result);
      setMyFiles((prev) => [...prev, myFile]);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrls = [];
    // 1. 파일 업로드
    if (myFiles.length) {
      // 1. 각각올리기 테스트
      // const start = performance.now();
      // await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // const end = performance.now();
      // console.log(end - start);

      // 2. 동시올리기 테스트(각각올리기보다는 빨라짐)
      const start = performance.now();
      const result = await Promise.all([
        // Promise.all([...]) 다 끝날 때 까지 기다리는 것
        // Promise.race([...]) 먼저 끝난 것 하나만 캐치
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);
      // result = [result1, result2, result3, ..., result10]
      // result.map((el) => el.data.uploadFile.url) => [url1, url2, url3, ..., url10]

      myImageUrls = result.map((el) => el.data.uploadFile.url);

      // const result1 = await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // myImageUrls[0] = result1.data?.uploadFile.url;
      // const result2 = await uploadFile({
      //   variables: {
      //     file: myFiles[1],
      //   },
      // });
      // myImageUrls[1] = result2.data?.uploadFile.url;
      // const result3 = await uploadFile({
      //   variables: {
      //     file: myFiles[2],
      //   },
      // });
      // myImageUrls[2] = result3.data?.uploadFile.url;
    }
    // 2. 업로드된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "초코야",
          password: "1234",
          title: "치키치키차카차카",
          contents: "초콜릿",
          images: [...myImageUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
      <img src={imageUrl} />
    </>
  );
}
