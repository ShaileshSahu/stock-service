import {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache,
    useQuery,
    gql,
  } from '@apollo/client'

export const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link: new HttpLink({ 
        credentials: "include",
        uri: "http://localhost:7070/graphql"
    })
});

export default client;