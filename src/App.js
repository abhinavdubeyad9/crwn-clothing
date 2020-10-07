import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';


class App extends Component {
  state = { 
    currentUser: null
   }
//in order to close user
   unsubscirbeFromAuth = null;

  componentDidMount() {
   this.unsubscirbeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }
 
  componentWillUnmount() {    //this will close subcription
    this.unsubscirbeFromAuth();
  }


  render() { 
    return (  
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndSignUpPage} />
      </Switch>
    </div>  );
  }
}
 
export default App;

