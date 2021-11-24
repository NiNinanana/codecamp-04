// console.log("Hello World!");
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

// apollo server setting
// db 먼저 연결하고 b서버 오픈

const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String!
    title: String
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA!]!
    # 느낌표는 이렇게 받아올 때 붙이는 것
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      // db에서 게시물데이터 꺼내오기 내용
      // db에서 게시물데이터 꺼내오기 내용
      // db에서 게시물데이터 꺼내오기 내용
      const result = await Board.find({ where: { deletedAt: null } }); // 아직 삭제가 안된 애들만 찾아줘
      console.log(result);

      return result; // 리턴해서 f로 나가는 것
    },
  },

  Mutation: {
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() }); // 소프트 딜리트르 ㄹ하기 위해선 업데이트를 사용
      // 왼쪽은 조건, 오른쪽은 그 조건에 따라서 실행할 내용
      return "게시물이 삭제되었습니다!!!";
    },

    // api서로 요청을 하 ㄹ 수가 있따.
    /* api가 150개가 있는데 프론트에게 공개하는 api는 100개, 나머지는 백에서 쓰는 것이 있다.
    공통된 api를 뽑아준 것.
    createBoard에서 deleteBoard를 가져올 수가 있따. */

    createBoard: async (parent: any, args: any) => {
      // 하드코딩
      // await Board.insert({
      //   title: "테수투",
      //   writer: "나나나",
      //   age: 20,
      // });

      // 2번째
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      // 3번째
      await Board.insert({
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
        ...args.createBoardInput,
      });

      return "게시물 등록에 성공하였습니다!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers, // api는 함수, resolver에 함수들을 모아서 넣는 것
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3311,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"], // 현재 경로
  logging: true, // 터미널 메시지 볼 여부
  synchronize: true,
})
  .then(() => {
    // 성공했을 때
    console.log("연결 완료!");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 실패했을 때
    console.log(error);
  });
