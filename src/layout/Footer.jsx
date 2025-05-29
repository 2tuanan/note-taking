import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center w-full h-10'>
            <p className='text-[#ccc] text-sm sm:text-base'>Copyright ⓒ {currentYear}</p>
        </footer>
    );
};

export default Footer;