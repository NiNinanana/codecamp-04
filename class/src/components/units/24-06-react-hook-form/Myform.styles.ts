import styled from "@emotion/styled";
import { IMyButtonProps } from "./Myform.types";

export const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "lightgrey"};
`;
