import React from 'react';
import { Link } from 'react-router-dom';

function SubNav(props) {
    const mainLink = props.links.find(
        item => item.id === props.match.params.mainId
      );
    console.log(props.match.params.mainId);
    
    console.log(props.links);

    return (
        <nav className="sub-nav">
            {mainLink.categories.map(link => (
                    <Link to={`/nav/${mainLink.id}/${link.id}`} key={link.id} className="sub-nav-link">
                        <div className="link-container">{link.name}</div>
                    </Link>
                ))}
        </nav>
    );
}

export default SubNav;