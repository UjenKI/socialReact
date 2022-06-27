import React from 'react';
import { create } from 'react-test-renderer';

import ProfileStatus from './ProfileStatus';

describe("Profile Component Testing", () => {
    test("Profile status shoud be in state", () => {
        const component = create(<ProfileStatus status="lol" />);
        const instance = component.getInstance();
        console.log(instance.props)
        expect(instance.state.status).toBe("lol");
    })
})