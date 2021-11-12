import styled from "@emotion/styled";
import { IUploadButtonProps } from "./BoardWrite.types";

export const HeadTitle = styled.div`
    font-size: 36px;
    font-weight: bold;
    padding-top: 60px;
    padding-left: 512px;
`

export const SmallText = styled.div`
    font-size: 16px;
    padding-bottom: 16px;
    
`

export const SmallInput = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 10px;
`

export const MediumInput = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 10px;
`

export const BigInput = styled.input`
    width: 996px;
    height: 480px;
    padding-bottom: 430px;
    padding-left: 10px;
`

export const Address = styled.input`
    width: 77px;
    height: 52px;
    padding-left: 10px;
`

export const SearchButton = styled.button`
    width: 124px;
    height: 52px;
    color: white;
    background-color: black;

`

export const YoutubeInput = styled.input`
    width: 996px;
    height: 45.78px;
    padding-left: 10px;
`

export const PhotoButton = styled.button`
    width: 78px;
    height: 78px;
    background-color: #BDBDBD;
`
export const PhoWrapper = styled.div`
    width: 282px;
    display: flex;
    justify-content: space-between;
`

export const SettingInput = styled.input`

`

export const UploadButton = styled.button`
    width: 179px;
    height: 52px;
    background-color: ${(props: IUploadButtonProps) => props.upup === true ? "#FFD600" : "whitegrey"};

`

export const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 101px;
    padding-right: 103px;
    padding-top: 80px;
    padding-bottom: 80px;
`

export const UserWrapper = styled.div`
    display: flex;
    padding-bottom: 40px;

`

export const NameWrapper = styled.div`
    padding-right: 24px;
`

export const PasswordWrapper = styled.div`

`

export const AddressWrapper = styled.div`
    padding-bottom: 16px;
    width: 227px;
    display: flex;
    justify-content: space-between;
`

export const TitleWrapper = styled.div`
    padding-bottom: 40px;
`

export const ContentWrapper = styled.div`
    padding-bottom: 16px;
`

export const AddressWrapperTwo = styled.div`
    padding-top: 30px;
    padding-bottom: 37px;
`

export const YoutubeWrapper = styled.div`
    padding-bottom: 40px;
`
export const PhotoWrapper = styled.div`
    padding-bottom: 40px;
`

export const FootButton = styled.div`
   padding-bottom: 100px;
   padding-left: 510px; 
`

export const SettingInputWrapper = styled.div`
    width: 159px;
    display: flex;
    justify-content: space-between;
`

export const ErrorText = styled.div`
    color: red;
`
