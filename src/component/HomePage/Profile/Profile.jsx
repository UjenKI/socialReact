import React, {useState} from 'react';

import avatar from '../../../assets/img/userPhoto.png';
import Loader from '../../Loader';
import ProfileStatusHook from '../Status/ProfileStatusHook';
import EditProfileReduxForm from './ProfileDataForm';

// import { useLocation, useParams } from 'react-router-dom';

import style from './Profile.module.css';

const Profile = ({profilePage, status, updateProfileStatus, isOwner, updateProfilePhoto, updateProfileInfo}) => {
// const Profile = (props) => {
    // debugger
    // console.log(isOwner)

    let [editMode, setEditMode] = useState(false)

    const state = profilePage.profile;
    console.log(state)

    const uploadPhoto = (e) => {
        if(e.target.files.length) {
            updateProfilePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        console.log(formData)
        updateProfileInfo(formData)
        setEditMode(false)
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
                    {/* <div className={style.fullName}>
                        <p><b>Full name: </b></p><h2>{state.fullName || '---Name---'}</h2>
                    </div> */}
                    {
                        editMode ? <EditProfileReduxForm profile={state} onSubmit={onSubmit}/> : <ProfileInfo setEditMode={() => setEditMode(true) } profile={state} status={status} updateProfileStatus={updateProfileStatus} isOwner={isOwner}/>
                    }
                </div>
            </div> }
            
            {/* {profileItem} */}
        </div>
    )
}

const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, setEditMode}) => {
    return (
        <div className={style.profileInfoWrapper}>
            <div className={style.fullName}>
                <p><b>Full name: </b></p><h2>{profile.fullName || '---Name---'}</h2>
            </div>
            {!isOwner && <button className={style.editBtn} onClick={setEditMode}>Edit</button>}
            <ProfileStatusHook status={status} updateProfileStatus={updateProfileStatus} />
            <div className={style.profile__description}>
                        <p><b>About me: </b>{profile.aboutMe || '--about---'}</p>
                    </div>
                    <div className={style.fullName}>
                        <p><b>Looking for a job: </b>{profile.lookingForAJob ? 'Yes' : 'No'}</p>
                    </div>
                    <div className={style.lookingDescription}>
                        <span><b>Looking for a job description:</b></span>
                        <p>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '-----'}</p>
                    </div>
                    <div className={style.myContacts}>
                        { Object.keys(profile.contacts).map(key => {
                            return <ProfileContact key={key} contactKey={key} contactValue={profile.contacts[key]}/>
                        }) }
                    </div>
        </div>
    )
}

// const ProfileEditForm = ({setEditMode}) => {
//     return (
//         <>
//             <h2>Form</h2>
//             <button className={style.saveBtn} onClick={setEditMode}>save</button>
//         </>
//     )

// }

const ProfileContact = ({contactKey, contactValue}) => {
    return (
        <div className={style.contactItem}>
            <p><b>{contactKey+":"}</b></p>
            <p>{ contactValue ? contactValue : "........." }</p>
        </div>
    )
}

export default Profile;