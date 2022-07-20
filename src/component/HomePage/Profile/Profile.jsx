import React from 'react';

import avatar from '../../../assets/img/userPhoto.png';
import Loader from '../../Loader';
import ProfileStatusHook from '../Status/ProfileStatusHook';

// import { useLocation, useParams } from 'react-router-dom';

import style from './Profile.module.css';

const Profile = ({profilePage, status, updateProfileStatus, isOwner, updateProfilePhoto}) => {
// const Profile = (props) => {
    // debugger
    console.log(isOwner)
    const state = profilePage.profile;

    const uploadPhoto = (e) => {
        if(e.target.files.length) {
            updateProfilePhoto(e.target.files[0])
        }
    }

    return (
        <div className={style.profile__wrapper}>
            { !profilePage.profile ? <Loader /> : <div className={style.profile__item}>
                <div className={style.img__profile}>
                    <img src={state.photos.large ? state.photos.large : avatar} alt="avatar"/>
                </div>
                {
                    !isOwner && 
                    <div className={style.upload__img}>
                        <label htmlFor="avatarUpload">
                            +
                        </label>
                        <input id="avatarUpload" onChange={uploadPhoto} type="file"/>
                    </div>
                }
                
                
                <div className={style.profile__info__item}>
                    <h2>{state.fullName || '---Name---'}</h2>
                    <ProfileStatusHook status={status} updateProfileStatus={updateProfileStatus} />
                    <div className={style.profile__description}>
                        <p>{state.aboutMe || '--about---'}</p>
                    </div>
                    <div className={style.fullName}>
                        <p>{state.lookingForAJobDescription}</p>
                    </div>
                </div>
            </div> }
            
            {/* {profileItem} */}
        </div>
    )
}

export default Profile;