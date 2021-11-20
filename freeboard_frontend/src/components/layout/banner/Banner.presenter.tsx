import { Banner, Contents, ContentsTitle } from "./Banner.styles";
import { Component } from "react";
import Slider from "react-slick";
import router, { useRouter } from "next/router";
import BannerTitleUI from "./Banner.presenter.UI";

export default function BannerUI(props) {
  const router = useRouter();
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
  };
  function onClickOne() {
    router.push(`/boards/${props.data?.fetchBoardsOfTheBest[0]._id}`);
  }
  function onClickTwo() {
    router.push(`/boards/${props.data?.fetchBoardsOfTheBest[1]._id}`);
  }
  function onClickThree() {
    router.push(`/boards/${props.data?.fetchBoardsOfTheBest[2]._id}`);
  }
  function onClickFour() {
    router.push(`/boards/${props.data?.fetchBoardsOfTheBest[3]._id}`);
  }

  function onClickTitle() {
    router.push(`/boards/${props.data?.fetchBoarfdsOfTheBest}`);
  }

  return (
    <>
      <Banner>
        <ContentsTitle>베스트 게시글</ContentsTitle>
        <Slider {...settings}>
          {props.data?.fetchBoardsOfTheBest.map((el, index) => (
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
