import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/Reducers/authReducer';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch()
    const { userInfo, role } = useSelector(state => state.auth)
    const navigate = useNavigate();
    return (
        <header className='bg-[#f5ba13] -mx-4 py-4 px-8 shadow-md text-[#fff]'>
            <div className='ml-0 rounded-md h-[65px] flex justify-between items-center px-5 transition-all' >
                <h1 className='flex text-[#fff] font-mclaren font-normal text-2xl'>Noteshelf</h1>
                <div className='flex justify-center items-center gap-3'>
                    <div className='flex justify-center items-center flex-col text-end'>
                        <h2 className='text-md font-bold'>{userInfo.name}</h2>
                        <span className='text-[14px] w-full font-normal'>{userInfo?.role?.charAt(0).toUpperCase() + userInfo?.role?.slice(1)}</span>
                    </div>
                    <img onClick={()=>setIsDropdownOpen(!isDropdownOpen)} className='w-[60px] h-[60px] bg-slate-700 rounded-full overflow-hidden cursor-pointer' src="http://localhost:3000/images/admin.png" alt="" />
                    {isDropdownOpen && (
                        <div className='group absolute top-[97px] right-0 bg-white shadow-md rounded-lg w-48 border border-[#f5ba13] hover:border-red-400/80 hover:bg-red-400 transition-all duration-300'>
                            <button onClick={()=> dispatch(logout({navigate, role}))}
                                className='flex items-center w-full px-4 py-3 text-sm text-gray-700
                                        group-hover:text-white rounded-md transition-all duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 12h14" />
                                </svg>
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;