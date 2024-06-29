import React from 'react';
import '../index.css'; 

const Footer = () => {
    return (
        <footer>
            <hr></hr>
            <button className='footer-btn'>About</button>
            <button className='footer-btn'>Contact</button>
            <button className='footer-btn'>Legal</button>
            <button className='footer-btn'>Terms</button>
            <br></br>
            <p className='footer-copyright'>Copyright © 2024 COSMOS. All rights reserved.</p>
        </footer>
    )
}

export default Footer;