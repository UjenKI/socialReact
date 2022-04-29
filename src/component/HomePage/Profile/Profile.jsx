import React from 'react';

import avatar from '../../../assets/img/Tony.png';
import Loader from '../../Loader';
import ProfileStatus from '../Status/ProfileStatus';

// import { useLocation, useParams } from 'react-router-dom';

import style from './Profile.module.css';

const Profile = (props) => {
    console.log(props)
    return (
        <div className={style.profile__wrapper}>
            { !props ? <Loader /> : <div className={style.profile__item}>
                <div className={style.img__profile}>
                    {/* <img src={props.photos.large ? props.photos.large : avatar} alt="avatar"/> */}
                </div>
                <div className={style.profile__info__item}>
                    <h2>{props.fullName || '---Name---'}</h2>
                    <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus} />
                    <div className={style.profile__description}>
                        <p>{props.aboutMe || '--about---'}</p>
                    </div>
                    <div className={style.fullName}>
                        <p>{props.lookingForAJobDescription}</p>
                    </div>
                </div>
            </div> }
            
            {/* {profileItem} */}
        </div>
    )
}

export default Profile;