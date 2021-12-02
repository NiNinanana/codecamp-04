import styled from "@emotion/styled";

export interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "lightgrey"};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
