import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ParkData from './pages/ParkData';
import Nav from './components/Nav';
import WebFont from 'webfontloader'; 
//boostrap css 

import 'bootstrap/dist/css/bootstrap.min.css';


const httpLink = createHttpLink({
    uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lobster', 'Alfa Slab One', 'Abril Fatface']
      }
    });
   }, []);
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/parks" component={ParkData}></Route>
                        <Route path= "*" component={NoMatch} />
                       
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App
