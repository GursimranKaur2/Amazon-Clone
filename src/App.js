import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  //  useEffect <<<<<<<<< POWERFUL
  // piece of code which runs based on a given condition

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
            // user logged in
            dispatch({
              type: "SET_USER",
              user: authUser
            })
      } else {
            // user logged out
            dispatch({
              type: "SET_USER",
              user: null
            });
      }
    });

      return () => {
        // any cleanUp operation goes in here
        unsubscribe();
      };

  }, []);

  // console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/checkout">
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Payment/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          <Footer/>
        </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
