import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import IsAdmin from "./isAdmin";

const Header = () => {
    const [isAdmin, setIsAdmin] = useState('false');
    const navigate = useNavigate();


    useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        credentials: 'include',
        redirect: 'follow',
    };

    // Fetch the API data here and update the state
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/isAdmin`, requestOptions);
            const data = await response.json();
            if (response.status === 403){setIsAdmin(false)}
            else if (response.status === 401) {
                navigate('/');
            }
            else {
                setIsAdmin(data.admin);
            }
        } catch (error) {
            // console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


    const handleSignOut = () => {
        // Remove cookies by setting the expiration date to the past
        document.cookie = 'your_cookie_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Clear local storage
        localStorage.clear();

        // Redirect to the sign-in page or perform any other sign-out related tasks
        // (e.g., updating the authentication state)
    };

  return (
    <main id="mainContainer" className="p-b-40">
      <div>
        <header className="d-flex space-between flex-center flex-middle">
          <div className="nav-links d-flex flex-center flex-middle">
            <Link to="/main">
              <h2 className="logo logo-text red-color f-s-28 m-r-25">
                NETFLIX
              </h2>
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
              <IsAdmin isAdmin={isAdmin} />
            <div>
              <Link to="/search">
                <img src="images/icons/search.svg" alt="search icon" />
              </Link>
            </div>
            <div className="dropdown notification">
              <img
                src="images/icons/notification.svg"
                alt="notification icon"
              />
              <div className="dropdown-content">
                {/* Notification items go here */}
              </div>
            </div>
            <div className="dropdown">
              <img
                src="images/icons/user-image-green.png"
                alt="user profile icon"
                className="user-icon"
              />{" "}
              <span className="profile-arrow"></span>
              <div className="dropdown-content">
                <div className="profile-links">
                  {/* Profile links go here */}
                </div>
                <div className="line"></div>
                <div className="links d-flex direction-column">
                  <Link to="/user">Account</Link>
                  <Link to="#">Help Center</Link>
                  <Link onClick={handleSignOut} to="/logout">Sign Out of Netflix</Link>
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
