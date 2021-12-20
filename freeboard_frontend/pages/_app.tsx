import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/layout";
import { AppProps } from "next/dist/shared/lib/router/router";

import { onError } from "@apollo/client/link/error";

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { createUploadLink } from "apollo-upload-client";
import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// // Set the configuration for your app
// // TODO: Replace with your project's config object
// const firebaseConfig = {
//   apiKey: "apiKey",
//   authDomain: "projectId.firebaseapp.com",
//   // For databases not in the us-central1 location, databaseURL will be of the
//   // form https://[databaseName].[region].firebasedatabase.app.
//   // For example, https://your-database-123.europe-west1.firebasedatabase.app
//   databaseURL: "https://databaseName.firebaseio.com",
//   storageBucket: "bucket.appspot.com",
// };

// const app = initializeApp(firebaseConfig);

// // Get a reference to the database service
// export const database = getDatabase(app);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const myValue = {
    accessToken,
    setAccessToken,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
          // const newAccessToken = getAccessToken(setMyAccessToken);

          // 3. 기존 실패한 요청 다시 재요청

          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
