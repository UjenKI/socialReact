import React from 'react';

import { useMatch } from 'react-router-dom';
import HomePage from './HomePage';

let HomePageRouter = (props) => {

    const match = useMatch('/profile/:userId');

    return (
        <HomePage {...props} match={match} />
    )
}

export default HomePageRouter;