import ApolloClient from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://movieql.now.sh'
});

export default client;