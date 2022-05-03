import React from 'react';

import ProfileContainer from './Profile/ProfileContainer';
import AllPostsContainer from './AllPosts/AllPostsContainer';

// import { useLocation, useParams } from 'react-router-dom';

import style from './HomePage.module.css';

const HomePage = (props) => {
    // console.log(props.profilePage)
    return(
        <div className={style.content__wrapper}>
            <div className={style.content__item}>
                <h2>Profile</h2>
                <ProfileContainer  {...props.profilePage} />
                <AllPostsContainer/>
            </div>
        </div>
    )
}

export default HomePage;