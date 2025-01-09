import React, { useState } from 'react';

const Note = (props) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(true);

    const handlePopoverToggle = (id) => {
        const popover = document.getElementById(id);
        if (popover) {
            setIsPopoverOpen(!isPopoverOpen);
        }
    }
    
    return (
        <div className='bg-[#fff] p-2 m-4 w-[240px] float-left shadow-md rounded-lg border'>
            <h1 className='text-base mb-1'>{props.title}</h1>
            <p className='text-base mb-2 whitespace-pre-wrap break-words'>{props.content}</p>
            <button
                onClick={() => {props.onDelete(props.id)}}
                className='relative w-9 h-9 float-right mr-2 text-[#f5ba13] border-none 
                cursor-pointer outline-none hover:transform hover:scale-105 transition-all duration-500'>X</button>
        </div>
    );
};

export default Note;