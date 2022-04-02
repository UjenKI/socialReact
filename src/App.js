import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './component/Header/HeaderContainer';
import HomePageContainer from './component/HomePage/HomePageContainer';
import ChatPageContainer from './component/Chat/ChatPageContainer';
import SideBar from './component/SideBar';
import UsersContainer from './component/Users/UsersContainer';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
      <HeaderContainer />
        <div className="wrap__container">
          <SideBar />
          <div className="wrapper__container">
            <Routes>
              <Route exact path='/' element={<HomePageContainer />}/>
              <Route exact path='/profile/:userId' element={<HomePageContainer /> }/>
              <Route exact path='/chat' element={<ChatPageContainer />} />
              <Route exact path='/users' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
