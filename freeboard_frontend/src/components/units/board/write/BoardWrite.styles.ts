import styled from "@emotion/styled";
import { IUploadButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 860px;
  // height: 1150px;
  border: 1px solid black;
  margin-left: 100px;
  margin-right: 100px;
`;
export const HeadTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 54px;
  padding-left: 360px;
`;

export const SmallText = styled.div`
  font-size: 11px;
  padding-bottom: 11px;
`;

export const SmallInput = styled.input`
  width: 370px;
  height: 47px;
  padding-left: 9px;
`;

export const MediumInput = styled.input`
  width: 762px;
  height: 47px;
  padding-left: 9px;
`;

export const BigInput = styled.input`
  width: 762px;
  height: 400px;
  padding-bottom: 350px;
  padding-left: 9px;
`;

export const Address = styled.input`
  width: 70px;
  height: 47px;
  padding-left: 9px;
`;

export const SearchButton = styled.button`
  width: 112px;
  height: 47px;
  color: white;
  background-color: black;
`;

export const YoutubeInput = styled.input`
  width: 762px;
  height: 47px;
  padding-left: 9px;
`;

export const PhotoButton = styled.div`
  width: 65px;
  height: 65px;
  background-color: #bdbdbd;
`;
export const PhoWrapper = styled.div`
  border: 1px solid black;
  width: 320px;
  background-color: lightgrey;
  margin-bottom: 10px;
`;

export const SettingInput = styled.input``;

export const UploadButton = styled.button`
  width: 161px;
  height: 47px;
  background-color: ${(props: IUploadButtonProps) =>
    props.upup === true ? "#FFD600" : "whitegrey"};
`;

export const BodyWrapper = styled.div`
  width: 100%;
  // height: 100%;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 72px;
  padding-bottom: 72px;
`;

export const UserWrapper = styled.div`
  display: flex;
  padding-bottom: 36px;
`;

export const NameWrapper = styled.div`
  padding-right: 22px;
`;

export const PasswordWrapper = styled.div``;

export const AddressWrapper = styled.div`
  padding-bottom: 15px;
  width: 205px;
  display: flex;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 36px;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 15px;
`;

export const AddressWrapperTwo = styled.div`
  padding-top: 27px;
  padding-bottom: 34px;
`;

export const YoutubeWrapper = styled.div`
  padding-bottom: 36px;
`;
export const PhotoWrapper = styled.div`
  padding-bottom: 36px;
`;

export const FootButton = styled.div`
  padding-bottom: 90px;
  padding-left: 350px;
`;

export const SettingInputWrapper = styled.div`
  width: 143px;
  display: flex;
  justify-content: space-between;
`;

export const ErrorText = styled.div`
  color: red;
`;

export const Image = styled.img`
  width: 320px;
  height: 180px;
`;
