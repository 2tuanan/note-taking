import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_note, messageClear } from '../../store/Reducers/noteReducer';
import { BeatLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const CreateArea = (props) => {
    const dispatch = useDispatch()
    const {loader, errorMessage, successMessage} = useSelector(state => state.note)
    const [isExpanded, setIsExpanded] = useState(false)
    
    const [input, setInput] = useState({
        title: '',
        content: ''
    })
    const expand = () => {
        setIsExpanded(true)
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const payload = {
            title: input.title,
            content: input.content
        }
        dispatch(add_note(payload))
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setInput({
                title: '',
                content: ''
            })
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage])

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div className='font-montserrat px-4'>
            <form onSubmit={submitHandler} action="" className='relative w-[480px] mt-8 mb-5 mx-auto bg-[#fff] p-4 box-border border rounded-lg shadow-md'>
                {
                    isExpanded && <input className='w-full border-none p-1 outline-none text-lg resize-none' 
                    onChange={handleChange} name='title' value={input.title} placeholder='Title' type="text" />
                }
                <textarea className='w-full border-none p-1 outline-none text-lg resize-none' 
                onClick={expand} onChange={handleChange} name="content" value={input.content} 
                placeholder='Take a note...'rows={isExpanded ? '3' : '1'} />
                {
                    isExpanded && <button type='submit' className='absolute w-12 h-9 right-[18px] -bottom-[18px] bg-[#f5ba13] 
                    text-[#fff] text-sm border-none rounded-full shadow-md cursor-pointer outline-none 
                    hover:transform hover:scale-105 transition-all duration-500' 
                    >
                        {
                            loader ? <BeatLoader cssOverride={overrideStyle} color='white'/> : 'Add'
                        }
                    </button>
                }
            </form>
        </div>
    );
};

export default CreateArea;