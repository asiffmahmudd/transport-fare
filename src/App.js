import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/destination/:vehicle">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
