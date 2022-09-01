import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { InputField, createField } from '../FieldControls/FieldControls';
import { required, maxLengthCreator10 } from '../utils/validators';
import { login } from '../../redux/authReducer';

import style from './Login.module.css';

const LoginForm = (props) => {
    // const maxLengthCreator10 = maxLengthCreator(10)

    return (
        <form onSubmit={props.handleSubmit}>
            {/* <div>
                <Field placeholder={"login"} name={'email'} component={InputField} validate={[required, maxLengthCreator10] }/>
            </div> */}
            {createField('email', InputField, [required, maxLengthCreator10], null, 'login')}
            {createField("password", InputField, [required, maxLengthCreator10], {type:"password"}, "password")}
            {createField("rememberMe", "input", null, {type:"checkbox"}, '', 'remember me')}
            {props.captchaUrl && <div>
                <img src={props.captchaUrl} alt="captcha"/>    
                {createField('captcha', InputField, [required], )}
            </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) return <Navigate to={'/profile'} />

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login)

