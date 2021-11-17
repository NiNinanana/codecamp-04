import { Banner } from "./Banner.styles";
import { Component } from "react";
import Slider from "react-slick";
import router, { useRouter } from "next/router";

export default function BannerUI(props) {
  const router = useRouter();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <Banner>Banner!!!</Banner>
      <div>
        <h2>베스트 게시글</h2>
        <Slider {...settings}>
          <div>
            <h3 onClick={onClickOne}>
              1. {props.data?.fetchBoardsOfTheBest[0].title}
            </h3>
          </div>
          <div onClick={onClickTwo}>
            <h3>2. {props.data?.fetchBoardsOfTheBest[1].title}</h3>
          </div>
          <div onClick={onClickThree}>
            <h3>3. {props.data?.fetchBoardsOfTheBest[2].title}</h3>
          </div>
          <div onClick={onClickFour}>
            <h3>4. {props.data?.fetchBoardsOfTheBest[3].title}</h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
