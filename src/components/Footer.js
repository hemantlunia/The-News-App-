import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-dark text-light">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-4">
                                <ul className='list-unstyled mt-3'>
                                    <h5>Contact Me</h5>
                                    <li>  Email: lunia17p@gmail.com</li>
                                    <li>  Phone: 8769884353</li>

                                </ul>
                            </div>
                            <div className="col-md-4 mt-3">
                                <h5>Follow Me</h5>
                                <ul className="list-unstyled mt-3">
                                    <li><Link to="https://www.facebook.com/profile.php?id=61552611805754" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>Facebook</li>
                                    <li> <Link to="https://x.com/Hemant21690502?t=sm_6w95QahM7bHaa0MKC9Q&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>Twitter</li>
                                    <li> <Link to="https://www.linkedin.com/in/hemant-kumar-7794a11aa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>LinkedIn</li>
                                    <li> <Link to="https://www.instagram.com/its_me_hemant.h/?igshid=MTk0NTkyODZkYg%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>Instagram</li>
                                </ul>
                            </div>
                            {/* <div className="col-md-4 mt-3">
                                <h5>Links (Disable)</h5>
                                <ul className="list-unstyled mt-3" >
                                    <li><>Home</></li>
                                    <li>About</li>
                                    <li><>Services</></li>
                                    <li>Contact</li>
                                </ul>
                            </div> */}
                        </div>
                        <hr />
                        <div className="text-center">
                            <p className='container pb-2'>&copy; 2023 NewsApp. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}


