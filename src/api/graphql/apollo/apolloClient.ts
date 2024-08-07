import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
const API_URI = import.meta.env.VITE_API_URI
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
})


export default apolloClient