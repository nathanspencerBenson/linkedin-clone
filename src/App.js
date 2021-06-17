import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';

import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Widgets from './components/Widgets/Widgets';
import Jobs from './components/Jobs/Jobs';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {

        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact>
              {!user ? (
                <Login />
              ) : (
                <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />

                </div>
              )} 
            </Route> 
            <Route path="/jobs" exact>
              <Jobs />
            </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
