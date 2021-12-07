import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      remarks
      price
      createdAt
      images
    }
  }
`;

export default function EnterKeyPage() {
  const [mySearch, setMySearch] = useState("");

  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      search: mySearch,
    },
  });

  const search = (event) => {
    setMySearch(event.target.value);
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      search();
    }
  };

  return (
    <>
      <input type="text" onKeyUp={enterKey} />
      <button onClick={search}>검색</button>
    </>
  );
}
