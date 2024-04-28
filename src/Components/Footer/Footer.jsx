import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <footer className='section bg-footer'>
        <div className="container">
            <div className="row">
            <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="https://www.google.com/">Pages</a></li>
                            <li><a href="https://www.facebook.com/">Our Team</a></li>
                            <li><a href="https://twitter.com/">Feuchers</a></li>
                            <li><a href="https://chat.openai.com/">Pricing</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Shopper</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="https://www.google.com/">Company </a></li>
                            <li><a href="https://www.facebook.com/">Product</a></li>
                            <li><a href="https://twitter.com/">Term &amp; Service</a></li>
                            <li><a href="https://chat.openai.com/">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Help</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="https://www.google.com/">Sign Up </a></li>
                            <li><a href="https://www.facebook.com/">Login</a></li>
                            <li><a href="https://twitter.com/">Terms of Services</a></li>
                            <li><a href="https://chat.openai.com/">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                        <p className="contact-info mt-4">Contact us if need help withanything</p>
                        <p className="contact-info">+01 123-456-7890</p>
                        <div className="mt-5">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="https://www.google.com/"><i className="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/"><i className="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/"><i className="fab google footer-social-icon fa-google"></i></a></li>
                                <li className="list-inline-item"><a href="https://chat.openai.com/"><i className="fab apple footer-social-icon fa-apple"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div> 
                </div>  
                <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">2019 © Company, All Rights Reserved</p>
        </div>
        </footer> 
    </div>
  )
}

export default Footer