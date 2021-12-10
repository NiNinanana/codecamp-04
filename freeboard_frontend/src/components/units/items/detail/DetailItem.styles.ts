import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* margin-left: 100px; */
  display: flex;
  flex-direction: column;
  width: 800px;
`;

export const ItemImage = styled.img`
  width: 800px;
  height: 450px;
`;

export const ItemName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const ItemRemarks = styled.div`
  color: lightgrey;
  border-bottom: 1px solid black;
`;
export const ItemAddress = styled.div`
  color: lightgrey;
`;

export const ItemCreatedAt = styled.div`
  color: lightgrey;
`;
export const ItemContents = styled.div`
  width: 800px;
`;
export const ItemPrice = styled.div``;
export const UpdateButton = styled.button`
  background-color: yellow;
  font-size: 16px;
  height: 40px;
  width: 60px;
`;
export const ListButton = styled.button`
  background-color: yellow;
  font-size: 16px;
  height: 40px;
  width: 60px;
`;
export const DeleteButton = styled.button`
  background-color: yellow;
  font-size: 16px;
  height: 40px;
  width: 60px;
`;
