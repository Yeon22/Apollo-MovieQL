
import {HashRouter as Router, Route}  from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://yeondo-movieql.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/:id" component={Detail}/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
