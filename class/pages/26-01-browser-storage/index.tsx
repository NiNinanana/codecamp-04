export default function BrowserStoragePage() {
  const onClickSetCookie = () => {
    document.cookie = "aaa=철수";
  };

  const onClickSetLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSetSessionStroage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    // const myCookie = document.cookie;
    // console.log(myCookie);
    // aaa=철수

    // "aaa=철수; ddd=맹구; zzz=짱구"
    //   .split("; ")
    //   .filter((el) => el.startsWith("zzz="))[0]
    //   .split("=")[1];
    // "짱구"

    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0]
      .split("=")[1];
    console.log(myCookie);
  };

  const onClickGetLocalStorage = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
    // 영희
  };

  const onClickGetSessionStorage = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
    // 훈이
  };

  return (
    <>
      <button onClick={onClickSetCookie}>쿠키에 저장하기</button>
      <br />
      <button onClick={onClickSetLocalStorage}>로컬스토리지에 저장하기</button>
      <br />
      <button onClick={onClickSetSessionStroage}>
        세션스토리지에 저장하기
      </button>
      <br />
      ================================
      <br />
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <br />
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <br />
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
