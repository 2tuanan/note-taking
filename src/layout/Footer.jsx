import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='absolute text-center w-full bottom-0 h-10'>
            <p className='text-[#ccc]'>Copyright ⓒ {currentYear}</p>
        </footer>
    );
};

export default Footer;