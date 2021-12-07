import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 170%; */
`;

export const LoginWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: 100px;
  width: 400px;
  height: 200px;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;
`;

export const ErrorText = styled.div`
  color: red;
`;
