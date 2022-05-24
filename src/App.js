import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from './component/Header/HeaderContainer';
import HomePageContainer from './component/HomePage/HomePageContainer';
import ChatPageContainer from './component/Chat/ChatPageContainer';
import SideBar from './component/SideBar';
import UsersContainer from './component/Users/UsersContainer';
import Login from './component/Login/Login';
import { initializeApp } from './redux/appReducer';
import Loader from './component/Loader';

import './App.css';


class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp()
  }

  render(){

    if(!this.props.initialized){
      return <Loader />
    }
    
    return (
      <Router>
      <div className="App">
      <HeaderContainer />
        <div className="wrap__container">
          <SideBar />
          <div className="wrapper__container">
            <Routes>
              <Route exact path='/' element={<HomePageContainer />}/>
              <Route exact path='/profile' element={<HomePageContainer />}/>
              <Route exact path='/profile/:userId' element={<HomePageContainer /> }/>
              <Route exact path='/chat' element={<ChatPageContainer />} />
              <Route exact path='/users' element={<UsersContainer />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App);
