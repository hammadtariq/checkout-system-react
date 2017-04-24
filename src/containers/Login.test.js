import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

it('Login renders without crashing', () => {
    shallow(<Login />)
});
