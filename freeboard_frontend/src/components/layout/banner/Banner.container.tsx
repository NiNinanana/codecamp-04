import { useQuery } from "@apollo/client";
import BannerUI from "./Banner.presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./Banner.queries";

export default function Banner() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  return <BannerUI data={data} />;
}
