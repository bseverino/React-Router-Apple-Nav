import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import data from '../data';

import Nav from './Nav';
import SubNav from './SubNav';

function NavWrapper() {
    const [links] = useState(data);

    return (
        <header className="nav-wrapper">
            <Nav links={links} />
            <Route exact path="/nav/:mainId" render={props => <SubNav {...props} links={links} />} />            
        </header>
    );
}

export default NavWrapper;