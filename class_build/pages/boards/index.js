import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="내 게시판🍝" />
        <meta property="og:url" content="http://nanana.shop" />
        <meta
          property="og:image"
          content="https://recipe1.ezmember.co.kr/cache/recipe/2020/02/17/de10670dbafcdaf709537c8018c303741.jpg"
        />
        <meta
          property="og:description"
          content="안녕하세요 내 게시판에 온 것을 환영합니다 파스타 먹고 가세요"
        />
      </Head>
      <div>안녕하세요 게시판입니당</div>
    </>
  );
}
