import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>Xepensr.tracker <i class="fi-rr-credit-card"></i></div>
                <div className='header-button'>
                <a href='https://github.com/atur-js'>
                    <i class="devicon-github-original">Star</i>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
