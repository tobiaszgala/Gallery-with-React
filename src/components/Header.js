import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
    render() {
        return (<Link to="/sunset"><h1>Gallery App with React</h1></Link>);
    }
    
}

export default Header;