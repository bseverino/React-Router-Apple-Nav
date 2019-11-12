import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="nav-link">
                    <div className="link-container">Home</div>
                </Link>
                {props.links.map(link => (
                    <NavLink to={`/nav/${link.id}`} key={link.id} className="nav-link" activeClassName="nav-link-active">
                        <div className="link-container">{link.name}</div>
                    </NavLink>
                ))}
                <Link to="/support" className="nav-link">
                    <div className="link-container">Support</div>
                </Link>
                <Link to="/search" className="nav-link">
                    <div className="link-container">Search</div>
                </Link>
                <Link to="/checkout" className="nav-link">
                    <div className="link-container">Checkout</div>
                </Link>
            </nav>
        </header>
    );
}

export default Nav;