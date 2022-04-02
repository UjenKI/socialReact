import React from 'react';

import Profile from './Profile/Profile';
import AllPostsContainer from './AllPosts/AllPostsContainer';

import { useLocation, useParams } from 'react-router-dom';

import style from './HomePage.module.css';

const HomePage = (props) => {
    return(
        <div className={style.content__wrapper}>
            <div className={style.content__item}>
                <h2>Profile</h2>
                <Profile  {...props.profilePage.profile}/>
                <AllPostsContainer/>
            </div>
        </div>
    )
}

export default HomePage;