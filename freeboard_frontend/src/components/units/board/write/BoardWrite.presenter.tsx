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
  SettingInput,
  Wrapper,
  SearchButton,
  Input1,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
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
              defaultValue={props.myZoneCode}
              readOnly
            />
            <SearchButton onClick={props.onToggleModal}>
              우편번호 검색
            </SearchButton>
            {props.isOpen && (
              <Modal
                title="우편번호 검색"
                visible={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
                // style={{ backgroundColor: "yellow" }}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </AddressWrapper>
          <MediumInput type="text" defaultValue={props.myAddress} readOnly />
          <AddressWrapperTwo>
            <MediumInput type="text" placeholder="상세주소를 입력하세요." />
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
            {/* <Image src={`https://storage.googleapis.com/${props.images[0]}`} /> */}
          </PhoWrapper>
          <Input1 type="file" onChange={props.uploadImage} />
          {/* {props.fileUrls.map((el, index) => (
            <input key={uuidv4()} type="file" />
          ))} */}
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
