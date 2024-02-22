import React from 'react'
import { Link } from 'react-router-dom'

 const NavBar=()=> {

    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
                    <Link className="navbar-brand text-light" to="/">NewsApp</Link>
                    <button className="navbar-toggler bg-black" style={{ color: 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                    <Link className="nav-link text-light" to="/home">Home <span className="sr-only"></span></Link>
                                </li> */}

                            <li className="nav-item">
                                <Link className="nav-link  text-light" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/technology">Technology</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link text-light" to="/contact">Contact</Link>
                                </li> */}
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </Link> */}
                            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item text-light" to="/">Action</Link>
                                    <Link className="dropdown-item text-light" to="/">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item text-light" to="/">Something else here</Link>
                                </div> */}
                            {/* </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="/">Disabled</Link>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Don't Search" aria-label="Search" readOnly />
                            <button disabled className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
                        }


export default NavBar;