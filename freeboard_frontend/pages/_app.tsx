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

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { createUploadLink } from "apollo-upload-client";
import { useState, createContext, SetStateAction, Dispatch } from "react";
// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);

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

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
