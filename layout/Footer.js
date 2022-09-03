import React, { useState } from 'react'
import {MailOutline, CallOutline, LogoTwitter,LocationOutline,
    LogoFacebook,LogoTiktok,LogoInstagram, ChevronUpOutline} from 'react-ionicons'


const Footer = () => {
    
  return (
    <>

    {/* #FOOTER */}


        <footer className="footer">

            <div className="footer-top">
            <div className="container">

                <div className="footer-brand">

                <a href="#" className="logo">
                    <img src="./logo.png" alt="Solutry logo" />
                </a>

                <p className="section-text">
                    Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    minim.
                </p>

                <div className="location-text">
                    <div className="location-icon">
                    <LocationOutline/>
                    </div>

                    <address className="address">
                    2750 Quadra Street Victoria, Canada.
                    </address>
                </div>

                </div>

                <div className="quicklink-box">
                <p className="h3 quicklink-title">Quick links</p>

                <ul className="quicklink-list">

                    <li>
                    <a href="#" className="quicklink">IT Startup</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Software</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Business</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">App</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Insurance</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Property</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Big Data</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Distance Learning</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Chatbot</a>
                    </li>

                    <li>
                    <a href="#" className="quicklink">Medical</a>
                    </li>

                </ul>
                </div>

                <div className="contact">
                <p className="h3 contact-title">Contact with us</p>

                <ul className="contact-list">

                    <li className="contact-item">
                    <div className="contact-icon">
                    <MailOutline/>
                    </div>

                    <a href="mailto:hello@solutry.com" className="contact-link">hello@solutry.com</a>
                    </li>

                    <li className="contact-item">
                    <div className="contact-icon">
                     <CallOutline/>
                    </div>

                    <a href="tel:+14854560102" className="contact-link">+1-485-456-0102</a>
                    </li>

                </ul>
                </div>

            </div>
            </div>

            <div className="footer-bottom">
            <div className="container">

                <p className="copyright">
                &copy; 2022 <a href="#">Decentitservice</a>. All Rights Reserved
                </p>

                <ul className="social-list">

                <li>
                    <a href="#" className="social-link">
                    <LogoFacebook/>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <LogoTwitter/>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <LogoTiktok/>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <LogoInstagram/>
                    </a>
                </li>

                </ul>

            </div>
            </div>

        </footer>

    </>
  )
}

export default Footer