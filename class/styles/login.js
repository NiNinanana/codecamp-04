import styled from "@emotion/styled";
import img from '../public/images/pizzabackground.png';


export const All = styled.div`
    background-image: url(${img});
    background-color: green;
`
export const Wrapper = styled.div`
    padding-top: 224px;
    padding-left: 51px;
    padding-right: 49px;
    padding-bottom: 83px;
`

export const HeadWrapper = styled.div`
    display: flex;
    flex-direction: column;

    height: 189px;
    justify-content: space-between;
`
export const Title = styled.div`
    font-size: 60px;
    color: white;
    margin-left: 160px;
`

export const LoginInput = styled.input`
    width: 520px;
    height: 30px;
    background-color: transparent;
    border: none;
`

export const SmallText = styled.div`

`

export const DeleteButton = styled.img`
    width: 20px;
    height: 20px;
`

export const LoginButton = styled.button`
    width: 540px;
    height: 76px;
    border-radius: 38px;
    background-color: #ff1b6d;
    opacity: 0.6;
    font-size: 26px;
    font-weight: bold;
    color: white;
    margin-top: 20px;
`

export const MenuBar = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const MenuButton = styled.button`
    font-size: 20px;
    color: white;
    background-color: transparent;
    border: none;

`

export const KakaoLoginButton = styled.button`
    width: 540px;
    height: 76px;
    background-color: transparent;
    border-radius: 38px;
    opacity: 0.6;
    color: #fae100;
    font-size: 26px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RoadIcon = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 219px;
`

export const KakaoIcon = styled.img`
    background-color: transparent;
    width: 40px;
    height: 40px;
`

export const EmailWrapper = styled.div`
    padding-top: 162px;
    display: flex;
`

export const PasswordWrapper = styled.div`
    display: flex;
    padding-top: 34px;
`

export const SeparateBar = styled.div`
`