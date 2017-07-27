import React from 'react';
import createPureComponent from 'UTIL/createPureComponent';
import APIList from './blocks/APIList';

export default createPureComponent(({ state_apiSource }) => {
    return (<APIList {...state_apiSource} />);
});