import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navContainer">
                  <Link to="/">  <h3>Young Matrimony</h3></Link>
                    <div className="navHeader">
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to='/about'> <li>About us</li></Link>
                            <Link to='/contact'><li>contact us</li></Link>
                            <Link to="/register"> <button>Register</button></Link>
                        </ul>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

