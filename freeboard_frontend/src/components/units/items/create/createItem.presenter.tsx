import { Radio } from "antd";
import * as S from "./createItem.styles";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";

export default function CreateItemUI(props) {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <S.Wrapper>
      <div>상품{props.isEdit ? "수정하기" : "등록하기"}</div>
      <S.InputWrapper>
        <S.ItemName
          placeholder="상품명"
          name="name"
          onChange={props.myInputs}
          defaultValue={props.data?.fetchUseditem?.name}
        />
        <S.ItemRemarks
          placeholder="요약"
          name="remarks"
          onChange={props.myInputs}
          defaultValue={props.data?.fetchUseditem?.remarks}
        />
        <S.ItemPrice
          type="number"
          placeholder="₩ 가격"
          onChange={props.myInputsPrice}
          defaultValue={Number(props.data?.fetchUseditem?.price)}
        />
        <S.ItemContents
          placeholder="설명"
          name="contents"
          onChange={props.myInputs}
          defaultValue={props.data?.fetchUseditem?.contents}
        />
      </S.InputWrapper>
      <div>
        <div>태그</div>
        <input type="text" />
      </div>
      <div>
        <div>사진</div>
        <input
          type="file"
          onChange={props.uploadImage}
          defaultValue={props.data?.fetchUseditem?.images?.[0]}
        />
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </div>
      <div>
        <div>나타낼 사진</div>
        <Radio value={1}>사진1</Radio>
        <Radio value={2}>사진2</Radio>
      </div>
      <div>
        {props.isEdit && <button onClick={props.itemUpdate}>수정하기</button>}
        {!props.isEdit && <button onClick={props.itemUpload}>등록하기</button>}
      </div>
    </S.Wrapper>
  );
}
