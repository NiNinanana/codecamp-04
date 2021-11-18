import { Banner, Contents, ContentsTitle } from "./Banner.styles";
import { Component } from "react";
import Slider from "react-slick";
import router, { useRouter } from "next/router";

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

  return (
    <>
      <Banner>
        <ContentsTitle>베스트 게시글</ContentsTitle>
        <Slider {...settings}>
          <Contents>
            <h3 onClick={onClickOne}>
              1. {props.data?.fetchBoardsOfTheBest[0].title}
            </h3>
          </Contents>
          <Contents onClick={onClickTwo}>
            <h3>2. {props.data?.fetchBoardsOfTheBest[1].title}</h3>
          </Contents>
          <Contents onClick={onClickThree}>
            <h3>3. {props.data?.fetchBoardsOfTheBest[2].title}</h3>
          </Contents>
          <Contents onClick={onClickFour}>
            <h3>4. {props.data?.fetchBoardsOfTheBest[3].title}</h3>
          </Contents>
        </Slider>
      </Banner>
    </>
  );
}
