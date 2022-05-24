import React, { useState } from 'react';

import style from './Status.module.css';

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatusText] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true)
    }

    let diactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(statusText)
    }

    let setStatus = (e) => {
        setStatusText(e.currentTarget.value)
    }

    return (
        <div className={style.status__wrapper}>
            { !editMode && 
                <div className={style.status__item}>
                    <h4 onDoubleClick={activateEditMode}>{props.status}</h4>
                </div>
            }
            {
                editMode &&
                <div className={style.status__input}>
                    <input onChange={setStatus}  type="text" onBlur={diactivateEditMode} value={statusText || '$$$$$'}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusHook;