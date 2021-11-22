import { CatImg } from "./Cat.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function CatUI(props) {
  // const onLoadMore = () => {}

  return (
    <>
      {/* <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}> */}
      <CatImg src={props.catUrl} />
      {/* </InfiniteScroll> */}
    </>
  );
}
