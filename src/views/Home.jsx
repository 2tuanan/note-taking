import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const {role} = useSelector(state => state.auth)
    if (role === 'user') return (<Navigate to ='/user' replace />)
    else if (role === 'admin') return (<Navigate to='/admin' replace/>);
    else return (<Navigate to='/login' replace/>);
};

export default Home;