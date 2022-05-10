import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { InputField } from '../FieldControls/FieldControls';
import { required, maxLengthCreator10 } from '../utils/validators';
import { login } from '../../redux/authReducer';

import style from './Login.module.css';

const LoginForm = (props) => {

    // const maxLengthCreator10 = maxLengthCreator(10)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'email'} component={InputField} validate={[required, maxLengthCreator10] }/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} type={"password"} component={InputField} validate={[required, maxLengthCreator10]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <button>Submit</button>
            {props.error && <h3>{props.error}</h3>}
       </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm',
  })(LoginForm)

const Login = (props) => {
    

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) return <Navigate to={'/profile'} />

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)

