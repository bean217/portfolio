import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-icons-wrapper">
                <div className="footer-icon">
                    <a 
                        href="https://www.facebook.com/saikofilms" 
                        rel="noreferrer" 
                        className="fa fa-facebook" 
                        target="_blank" >
                    </a>
                </div>
                <div className="footer-icon">
                    <a 
                        href="https://www.linkedin.com/in/benjamin-piro-38427a195/"
                        rel="noreferrer" 
                        className="fa fa-linkedin" 
                        target="_blank" >
                    </a>
                </div>
                <div className="footer-icon">
                    <a 
                        href="https://github.com/bean217" 
                        rel="noreferrer" 
                        className="fa fa-github" 
                        target="_blank" >
                    </a>
                </div>
            </div>
            <div>Copyright &copy; Benjamin Piro {(new Date(Date.now())).getFullYear()}</div>
        </div>
    );
}

export default Footer;