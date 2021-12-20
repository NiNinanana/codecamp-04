import { Banner, ContentsTitle } from "./Banner.styles";
import Slider from "react-slick";
import BannerTitleUI from "./Banner.presenter.UI";
import { IBannerUIProps } from "./Banner.types";

export default function BannerUI(props: IBannerUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
  };

  return (
    <>
      <Banner>
        <ContentsTitle>베스트 게시글</ContentsTitle>
        <Slider {...settings}>
          {props.data?.fetchBoardsOfTheBest.map((el: any, index: number) => (
            // <Contents key={el._id}>
            //   <h3 onClick={onClickOne}>
            //     {index + 1}. {el.title}
            //   </h3>
            // </Contents>
            <BannerTitleUI el={el} index={index} key={el._id} />
          ))}
        </Slider>
      </Banner>
    </>
  );
}
