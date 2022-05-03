import React from 'react';

import style from './Status.module.css';

class ProfileStatus extends React.Component {

    state = {
        statusText: this.props.status,
        editMode: false
    }

    activateEditMode = () => {
        console.log("looool")
        this.setState({
            editMode: true
        })
    }

    diactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.statusText)
    }

    setStatus = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState)
        if(prevProps.status !== this.props.status){
            this.setState({
                statusText: this.props.status
            })
        }
    }
    

    render() {

        return (
            <div className={style.status__wrapper}>
                { !this.state.editMode && 
                    <div className={style.status__item}>
                        <h4 onDoubleClick={this.activateEditMode}>{this.props.status}</h4>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div className={style.status__input}>
                        <input onChange={this.setStatus}  type="text" onBlur={this.diactivateEditMode} value={this.state.statusText || '$$$$$'}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;