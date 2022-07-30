import React from 'react';
import { reduxForm } from 'redux-form';
import { TextAreaField, InputField, createField } from '../../FieldControls/FieldControls';

import style from './Profile.module.css';


const ProfileDataForm =({handleSubmit, profile}) => {
    return (
        <form className={style.editProfileForm} onSubmit={handleSubmit}>
            <div className={style.fullName}>
                <p>Full name:</p>
                {createField('fullName', InputField, null, {}, 'enter full name', )}
            </div>
            <div className={style.aboutMe}>
                <p>About me:</p>
                {createField('aboutMe', InputField, null, {}, 'enter about me', )}
            </div>
            <div className={style.lookingFor}>
                <p>Looking for a job:</p>
                {createField("lookingFor", "input", null, {type:"checkbox"})}
            </div>
            <div className={style.myContacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <EditProfileContact key={key} contactKey={key} contactValue={profile.contacts[key]} />
                })}
            </div>
            <button>save</button>
        </form>
    )
}

const EditProfileContact =({contactKey, contactValue}) => {
    return (
        <div className={style.contactItem}>
            <p><b>{contactKey+":"}</b></p>
            {createField(`${contactKey}`, InputField, null, {value:{contactValue}}, `enter your ${contactKey}`)};
        </div>
    )
}

const EditProfileReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);

export default EditProfileReduxForm;