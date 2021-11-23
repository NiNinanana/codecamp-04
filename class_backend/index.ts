// console.log("Hello World!");
import { createConnection } from "typeorm";

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
  })
  .catch((error) => {
    // 실패했을 때
    console.log(error);
  });
