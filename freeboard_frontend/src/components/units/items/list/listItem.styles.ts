import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-left: 100px;
`;

export const List = styled.div`
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

export const ItemWrapper = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 30px;
  font-size: 20px;
  width: 850px;
  display: flex;
`;

export const ItemTextWrapper = styled.div``;

export const ListWrapper = styled.div`
  height: 700px;
  overflow: auto;
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const ItemPrice = styled.div``;

export const ItemGreyWrapper = styled.div`
  display: flex;
`;

export const ItemRemarks = styled.div`
  color: lightgrey;
`;

export const ItemCreatedAt = styled.div`
  color: lightgrey;
`;

export const ItemImage = styled.img`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 7px;
`;

export const SearchButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: yellow;
  border-radius: 7px;
`;

export const CreateButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: yellow;
  border-radius: 7px;
`;

export const BasketButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: yellow;
  border-radius: 7px;
`;
