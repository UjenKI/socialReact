import React from 'react';

import loader from '../../assets/img/loader.gif';
import style from './Loader.module.css';

const Loader = () => {
    return (
        <div className={ style.loader }>
            <div className={ style.loaderWrapper }>
                <img src={loader} alt="loader"/>
            </div>
        </div>
    )
}

export default Loader;