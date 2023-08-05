import React from 'react';
import '../css/NetflixLogin.css'; // Import the CSS file for styling
import '../css/logout.css'; // Import the CSS file for styling


class LogoutPage extends React.Component {
    render() {
        return (
            <main id={"logout"} style={{ padding: '0px 10px' }}>
                <header className="d-flex space-between middle-align">
                    <img src="./images/logo.PNG" height="50px" width="170px" alt="site logo main" />
                    <button className="button">
                        <a href="/login">Sign In</a>
                    </button>
                </header>
                <section id="logout-section" className="d-flex flex-center">
                    <div className="logoutContainer f-s-20 d-flex flex-center direction-column">
                        <h2 className="signOutHeader f-s-28 f-w-4">Signed Out</h2>
                        <p className="logoutMessage">
                            Only members using a shared or public computer need to end each visit to Netflix by using the Sign Out
                            link.
                        </p>
                        <p className="logoutMessage">This computer will be redirected to the Netflix home page in 30 seconds.</p>
                        <button className="button logoutButton">
                            <a href="/login">Continue</a>
                        </button>
                    </div>
                </section>
            </main>
        );
    }
}

export default LogoutPage;
