import React from 'react';
import '../index.css'; 

const Nav = () => {
    return (
        <header>
            <nav className='landingpage-nav'> 
                <h3 className='nav-title'>COSMOS</h3>
                <div className='nav-buttons'>
                    <button className='nav-button'>Home</button>
                    <button className='nav-button'>About</button>
                    <button className='nav-button'>Contact</button>
                </div>
                <button className='nav-button'>Login</button>
            </nav>
        </header>
    );
}

export default Nav;
