const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
  FETCH_BOARDS,
  {
    variables: {
      page: 1,
    },
  }
);

// MouseEvent는 react에서 임포트
const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  if (event.target instanceof Element)
    refetch({ page: Number(event.target.id) });
};

// ChangeEvent는 react에서 임포트
function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
  setMyWriter(event.target.value);
  if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
    setMyQqq(true);
  } else {
    setMyQqq(false);
  }
}

if (error instanceof Error) alert(error.message);
