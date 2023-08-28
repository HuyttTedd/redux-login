import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {signInAPI} from './actions';
import { connect } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = (props) => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
          <div onClick={() => props.signIn()}>
            <img src="google.jpg" />
          </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.userState.user };
}

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
