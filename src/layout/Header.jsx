import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const { userInfo } = useSelector(state => state.auth)
    return (
        <header className='bg-[#f5ba13] -mx-4 py-4 px-8 shadow-md text-[#fff]'>
            <div className='ml-0 rounded-md h-[65px] flex justify-between items-center px-5 transition-all' >
                <h1 className='flex text-[#fff] font-mclaren font-normal text-2xl'>Noteshelf</h1>
                <div className='flex justify-center items-center gap-3'>
                    <div className='flex justify-center items-center flex-col text-end'>
                        <h2 className='text-md font-bold'>{userInfo.name}</h2>
                        <span className='text-[14px] w-full font-normal'>{userInfo?.role?.charAt(0).toUpperCase() + userInfo?.role?.slice(1)}</span>
                    </div>
                    <img className='w-[60px] h-[60px] bg-slate-700 rounded-full overflow-hidden' src="http://localhost:3000/images/admin.png" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;