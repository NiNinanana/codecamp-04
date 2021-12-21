import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        {/* <meta property="og:url" content="http://nanana.shop" /> */}
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images}`}
        />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
      </Head>
      <div>안녕하세요 상품페이지입니당</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
      price
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: router.query.useditemId,
    }
  );

  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        price: result.fetchUseditem.price,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
