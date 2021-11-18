import {
  ErrorText,
  SettingInputWrapper,
  FootButton,
  HeadTitle,
  PhoWrapper,
  PhotoWrapper,
  YoutubeWrapper,
  AddressWrapperTwo,
  ContentWrapper,
  TitleWrapper,
  AddressWrapper,
  UserWrapper,
  NameWrapper,
  PasswordWrapper,
  BodyWrapper,
  UploadButton,
  SmallText,
  SmallInput,
  MediumInput,
  BigInput,
  Address,
  YoutubeInput,
  PhotoButton,
  SettingInput,
  Wrapper,
  SearchButton,
} from "./BoardWrite.styles";
import { BoardWriteUIProps } from "./BoardWrite.types";
import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "@emotion/styled";

export default function BoardWriteUI(props: BoardWriteUIProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };
  return (
    <Wrapper>
      <HeadTitle>게시물 {props.isEdit ? "수정" : "등록"}</HeadTitle>
      <BodyWrapper>
        <UserWrapper>
          <NameWrapper>
            <SmallText>작성자</SmallText>
            <SmallInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.first}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <ErrorText>{props.errorWriter}</ErrorText>
          </NameWrapper>
          <PasswordWrapper>
            <SmallText>비밀번호</SmallText>
            <SmallInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.second}
            />
            <ErrorText>{props.errorPassword}</ErrorText>
          </PasswordWrapper>
        </UserWrapper>
        <TitleWrapper>
          <SmallText>제목</SmallText>
          <MediumInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.third}
            defaultValue={props.data?.fetchBoard.title}
          />
          <ErrorText>{props.errorTitle}</ErrorText>
        </TitleWrapper>
        <ContentWrapper>
          <SmallText>내용</SmallText>
          <BigInput
            type="text"
            placeholder="내용을 작성해주세요."
            onChange={props.fourth}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <ErrorText>{props.errorContent}</ErrorText>
        </ContentWrapper>
        <div>
          <SmallText>주소</SmallText>
          <AddressWrapper>
            <Address
              type="text"
              placeholder="07250"
              defaultValue={myZonecode}
              readOnly
            />
            <SearchButton onClick={onToggleModal}>우편번호 검색</SearchButton>
            {isOpen && (
              <Modal
                title="우편번호 검색"
                visible={true}
                onOk={onToggleModal}
                onCancel={onToggleModal}
                // style={{ backgroundColor: "yellow" }}
              >
                <DaumPostcode onComplete={handleComplete} />
              </Modal>
            )}
          </AddressWrapper>
          <MediumInput type="text" defaultValue={myAddress} readOnly />
          <AddressWrapperTwo>
            <MediumInput type="text" />
          </AddressWrapperTwo>
        </div>
        <YoutubeWrapper>
          <SmallText>유튜브</SmallText>
          <YoutubeInput
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.fifth}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          />
        </YoutubeWrapper>
        <PhotoWrapper>
          <SmallText>사진 첨부</SmallText>
          <PhoWrapper>
            <PhotoButton></PhotoButton>
            <PhotoButton></PhotoButton>
            <PhotoButton></PhotoButton>
          </PhoWrapper>
        </PhotoWrapper>
        <div>
          <SmallText>메인 설정</SmallText>
          <SettingInputWrapper>
            <SettingInput type="radio" name="setting" />
            유튜브
            <SettingInput type="radio" name="setting" />
            사진
          </SettingInputWrapper>
        </div>
      </BodyWrapper>
      <FootButton>
        {props.isEdit && (
          <UploadButton onClick={props.update} upup={props.upup}>
            수정하기
          </UploadButton>
        )}
        {!props.isEdit && (
          <UploadButton onClick={props.upload} upup={props.upup}>
            등록하기
          </UploadButton>
        )}
      </FootButton>
    </Wrapper>
  );
}
