import React from 'react';
import { Field, reduxForm } from 'redux-form';

import style from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <button>Submit</button>
       </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
  })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login

