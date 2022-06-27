import React from 'react';

import { Field } from 'redux-form';

import style from './FieldControls.module.css';

// export const TextAreaField = ({input, meta, ...props}) => {
//     let hasError = meta.touched && meta.error
//     return (
//         <div className={style.formControl__wrapper}>
//             <div className={style.formControl + " " + (hasError ? style.error : ' ')}>
//                 <textarea {...input} {...props}></textarea>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const InputField = ({input, meta, ...props}) => {
//     let hasError = meta.touched && meta.error
//     return (
//         <div className={style.formControl__wrapper}>
//             <div className={style.formControl + " " + (hasError ? style.error : ' ')}>
//                 <input {...input} {...props}/>
//                 {hasError && <span>{meta.error}</span>}
//             </div>
            
//         </div>
//     )
// }

export const FieldControls = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;
    // console.log(meta.error)
    return (
        <div className={ style.formControl__wrapper }>
            <div className={ style.formControl + " " + (hasError ? style.error : " ")}>
                <children.type {...input} {...children.props}/>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const TextAreaField = (props) => {
    return (
        <FieldControls {...props}><textarea/></FieldControls>
    )
}
export const InputField = (props) => {
    return (
        <FieldControls {...props}><input/></FieldControls>
    )
}

export const createField = (name, component, validate = null, props={}, placeholder = '', text='') => {
    return (
        <div>
            <Field name={name} component={component} validate={validate} placeholder={placeholder} {...props}/>{text}
        </div>
    )
}