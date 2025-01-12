import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MainPage from './MainPage';

const Home = () => {
    const {role} = useSelector(state => state.auth)
    if (role === 'user') return (<MainPage />);
    else if (role === 'admin') return (<Navigate to='/admin' replace/>);
    else return (<Navigate to='/login' replace/>);
};

export default Home;