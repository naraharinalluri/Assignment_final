import React, { Component } from 'react';
import styles from "./welcomescreen.module.css"

class WelcomeScreen extends Component {
    logout = React.createRef()
    handleLogout = e => {
        window.location = '/';
    }

    render() {
        return (
            <div id={styles.main} className="container">
                <span>
                    <h1 className="container">WELCOME USER!</h1>
                </span>
                <span ref={this.logout} onClick={e => { e.preventDefault(); this.handleLogout(e) }} id="logoutBtn" type="submit" className="btn btn-primary btn-lg">Logout</span>
            </div>
        );
    }
}

export default WelcomeScreen;