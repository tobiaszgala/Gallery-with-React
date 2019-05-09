import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends PureComponent {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/sunset">Sunset</NavLink></li>
                    <li><NavLink to="/waterfall">Waterfall</NavLink></li>
                    <li><NavLink to="/rainbows">Rainbows</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;