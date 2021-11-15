import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import "antd/dist/antd.css"

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
