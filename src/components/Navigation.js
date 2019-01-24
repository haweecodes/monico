import React, {Component} from 'react';
import '../styles/Navigation.css';
import {Link} from "react-router-dom";

class Navigation extends Component {

    handlePage = (value, e) => {
        this.refs.home.classList.remove('active')
        this.refs.team.classList.remove('active')


        switch (value) {
            case 'home':
                this.refs.home.classList.add('active')
                break;
            case 'team':
                this.refs.team.classList.add('active')
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <div className="navBar">
                <ul>
                    <Link to="/">
                        <li ref="home" className="active" onClick={(e) => this.handlePage('home', e)}>Home</li>
                    </Link>
                    <Link to="/team">
                        <li ref="team" onClick={(e) => this.handlePage('team', e)}>Team</li>
                    </Link>
                </ul>

            </div>
        )
    }
}

export default Navigation