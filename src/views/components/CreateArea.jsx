import React from 'react';
import { BeatLoader } from 'react-spinners';

const CreateArea = ({ input, handleChange, submitHandler, isExpanded, setIsExpanded, loader }) => {
    const expand = () => setIsExpanded(true);

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div className='font-montserrat px-4'>
            <form onSubmit={submitHandler} action="" className='relative w-full sm:w-[480px] mt-8 mb-7 sm:mb-5 mx-auto bg-[#fff] p-4 box-border border rounded-lg shadow-md'>
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
                            loader ? <BeatLoader cssOverride={overrideStyle} size={7} color='white'/> : 'Add'
                        }
                    </button>
                }
            </form>
        </div>
    );
};

export default CreateArea;