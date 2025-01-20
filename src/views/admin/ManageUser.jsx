import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_users } from '../../store/Reducers/adminReducer';

const ManageUser = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(get_users())
    }, [dispatch])
    return (
        <div className='px-4 mt-8 font-montserrat'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Management</h1>
            <div className='max-w-[800px] mx-auto bg-[#fff] p-4 rounded-lg shadow-md'>
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user._id} className='bg-[#f9f9f9] p-3 mb-5 rounded-lg shadow-sm'>
                            <h2 className='text-lg font-semibold mb-1'>{user.name}</h2>
                            <p className='text-sm mb-1'>Email: {user.email}</p>
                            <p className='text-sm mb-3'>Total Notes: <span className='font-medium'>{user.noteTotal || 0}</span></p>
                            <div className='flex gap-3'>
                                <button className='w-28 bg-[#f5ba13] text-white py-2 rounded-md shadow-md text-sm 
                                    hover:transform hover:scale-105 transition-all duration-500'>
                                    Reset Notes
                                </button>
                                <button className='w-28 bg-red-500 text-white py-2 rounded-md shadow-md text-sm 
                                    hover:transform hover:scale-105 transition-all duration-500'>
                                    Delete User
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No users found</p>
                )}
            </div>
        </div>
    );
};

export default ManageUser;