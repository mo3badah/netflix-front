
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <main id="mainContainer" className="p-b-40">
            <div>
                <header className="d-flex space-between flex-center flex-middle">
                    <div className="nav-links d-flex flex-center flex-middle">
                        <Link to="/main">
                            <h2 className="logo logo-text red-color f-s-28 m-r-25">NETFLIX</h2>
                            <h2 className="second-logo-text red-color f-s-28">N</h2>
                        </Link>
                        <Link to="/main" className="nav-item home">
                            Home
                        </Link>
                        <Link to="/main" className="nav-item">
                            TV Show
                        </Link>
                        <Link to="/main" className="nav-item">
                            Movies
                        </Link>
                        <Link to="/main" className="nav-item latest">
                            Latest
                        </Link>
                        <Link to="/main" className="nav-item">
                            My List
                        </Link>
                    </div>
                    <div className="righticons d-flex flex-end flex-middle">
                        <Link to="/search">
                            <img src="images/icons/search.svg" alt="search icon" />
                        </Link>
                        <div className="dropdown notification">
                            <img src="images/icons/notification.svg" alt="notification icon" />
                            <div className="dropdown-content">
                                {/* Notification items go here */}
                            </div>
                        </div>

                        <div className="dropdown">
                            <img src="images/icons/user-image-green.png" alt="user profile icon" className="user-icon" />{' '}
                            <span className="profile-arrow"></span>

                            <div className="dropdown-content">
                                <div className="profile-links">
                                    {/* Profile links go here */}
                                </div>
                                <div className="line"></div>
                                <div className="links d-flex direction-column">
                                    <a href="/user">Account</a>
                                    <a href="#">Help Center</a>
                                    <a href="/logout">Sign Out of Netflix</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </main>
    );
};

export default Header;
