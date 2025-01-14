import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user_register, messageClear } from '../../store/Reducers/authReducer';
import { BeatLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loader, errorMessage, successMessage} = useSelector(state => state.auth)
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputHanlder = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(user_register(state))
    }

    useEffect(() => {
        if (errorMessage){
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage){
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
    }, [errorMessage, successMessage])

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div className='min-w-screen min-h-screen bg-gray-200 flex flex-col justify-center items-center'>
            <div className='flex-col justify-center items-center'>
                <div className='mb-10 p-4'>
                    <h2 className='text-center text-yellow-500'>Create an account</h2>
                </div>
                <div className='bg-slate-500 p-10 rounded-md text-white justify-between items-center'>
                    <h2 className='text-center mb-8'>Sign Up</h2>
                    <form onSubmit={submitHandler}>
                        <div className='flex flex-row w-full gap-4 justify-center items-center mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 14 14" fill="none">
                                <path d="M13.6555 3.73932L7.09302 0.676819C7.03439 0.649475 6.96658 0.649475 6.90796 0.676819L0.345457 3.73932C0.268457 3.77519 0.219238 3.85241 0.219238 3.93751C0.219238 4.0226 0.268457 4.09982 0.345457 4.13569L6.90796 7.19819C6.93727 7.21197 6.96877 7.21876 7.00049 7.21876C7.03221 7.21876 7.06371 7.21197 7.09302 7.19819L9.40674 6.11844V11.7425L8.35368 13.2167C8.30621 13.2834 8.29964 13.3709 8.33727 13.4439C8.37467 13.5168 8.44971 13.5625 8.53174 13.5625H10.7192C10.8013 13.5625 10.8763 13.5168 10.9137 13.4439C10.9511 13.3709 10.9448 13.2834 10.8973 13.2167L9.84424 11.7425V5.91435L13.6555 4.13569C13.7325 4.09982 13.7817 4.0226 13.7817 3.93751C13.7817 3.85241 13.7325 3.77519 13.6555 3.73932Z" fill="#ADB5BD"/>
                                <path d="M8.96924 6.80551L7.27808 7.59476C7.19189 7.63479 7.09586 7.65622 7.00049 7.65622C6.90511 7.65622 6.80908 7.63479 6.72268 7.59476L2.40674 5.58051V9.18747C2.40674 10.414 4.42449 11.375 7.00049 11.375C7.71011 11.375 8.37489 11.2999 8.96924 11.1685V6.80551Z" fill="#ADB5BD"/>
                                <path d="M10.2817 6.19304V10.7317C11.0968 10.3388 11.5942 9.79607 11.5942 9.18751V5.58032L10.2817 6.19304Z" fill="#ADB5BD"/>
                            </svg>
                            <input onChange={inputHanlder} value={state.name} className='px-3 py-2 outline-none border border-slate-800 bg-transparent rounded-md' 
                            type="text" name='name' placeholder='Name' id='name' required/>
                        </div>
                        <div className='flex flex-row w-full gap-4 justify-center items-center mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 14 12" fill="none">
                                <path d="M7.42284 7.20313C7.2933 7.27452 7.1478 7.31196 6.99989 7.31196C6.85198 7.31196 6.70648 7.27452 6.57694 7.20313L0.4375 3.81622V10.1563C0.437847 10.5042 0.57624 10.8379 0.822306 11.0839C1.06837 11.33 1.40201 11.4684 1.75 11.4688H12.25C12.598 11.4684 12.9316 11.33 13.1777 11.0839C13.4238 10.8379 13.5622 10.5042 13.5625 10.1563V3.81622L7.42284 7.20313Z" fill="#ADB5BD"/>
                                <path d="M12.2505 0.53125H1.75049C1.4025 0.531597 1.06886 0.66999 0.822794 0.916056C0.576728 1.16212 0.438336 1.49576 0.437988 1.84375V2.9375C0.437973 2.97664 0.448459 3.01506 0.468351 3.04877C0.488243 3.08247 0.516813 3.11022 0.551082 3.12912L6.89483 6.62912C6.92719 6.64697 6.96354 6.65633 7.00049 6.65633C7.03744 6.65633 7.07379 6.64697 7.10614 6.62912L13.4499 3.12912C13.4842 3.11022 13.5127 3.08247 13.5326 3.04877C13.5525 3.01506 13.563 2.97664 13.563 2.9375V1.84375C13.5626 1.49576 13.4242 1.16212 13.1782 0.916056C12.9321 0.66999 12.5985 0.531597 12.2505 0.53125Z" fill="#ADB5BD"/>
                            </svg>
                            <input onChange={inputHanlder} value={state.email} className='px-3 py-2 outline-none border border-slate-800 bg-transparent rounded-md focus:bg-transparent' 
                            type="email" name='email' placeholder='Email' id='email' required/>
                        </div>
                        <div className='flex flex-row w-full gap-4 justify-center items-center mb-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 10 14" fill="none">
                                <path d="M5 5.03131C2.58369 5.03131 0.625 6.99 0.625 9.40631C0.625 11.8226 2.58369 13.7813 5 13.7813C7.41631 13.7813 9.375 11.8226 9.375 9.40631C9.375 6.99 7.41631 5.03131 5 5.03131ZM5.21875 10.0429V11.3751H4.78125V10.0429C4.16066 9.93853 3.6875 9.40019 3.6875 8.75006C3.6875 8.02512 4.27506 7.43756 5 7.43756C5.72494 7.43756 6.3125 8.02512 6.3125 8.75006C6.3125 9.40019 5.83934 9.93853 5.21875 10.0429Z" fill="#ADB5BD"/>
                                <path d="M2.59424 5.24125V3.0625C2.59424 1.73578 3.67377 0.65625 5.00049 0.65625C6.32721 0.65625 7.40674 1.73578 7.40674 3.0625H7.84424C7.84424 1.4945 6.56849 0.21875 5.00049 0.21875C3.43249 0.21875 2.15674 1.4945 2.15674 3.0625V5.52694C2.29696 5.42391 2.44308 5.32875 2.59424 5.24125Z" fill="#ADB5BD"/>
                            </svg>
                            <input onChange={inputHanlder} value={state.password} className='px-3 py-2 outline-none border border-slate-800 bg-transparent rounded-md focus:bg-transparent' 
                            type="password" name='password' placeholder='Password' id='password' required/>
                        </div>
                        <div className='flex items-center w-full gap-3 mb-8'>
                            <input className='w-4 h-4 text-white overflow-hidden bg-gray-300 rounded-md border-gray-400 focus:ring-blue-500 focus:border-blue-500'
                            type="checkbox" name='checkbox' id='checkbox'/>
                            <label htmlFor="checkbox">I agree with Privacy Policy</label>
                        </div>
                        <button disabled={loader ? true : false} className='flex items-center m-auto bg-yellow-400 rounded-md py-2 px-3 hover:shadow-md hover:shadow-yellow-200 transform duration-500'>
                            {
                                loader ? <BeatLoader cssOverride={overrideStyle} color='white'/> : 'Create Account'
                            }
                        </button>
                    </form>
                </div>
                <div className='flex justify-end items-center mt-2'>
                    <p>Already have an account ? <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;