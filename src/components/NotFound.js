import React from 'react';

const NotFound = () => {
    return (
        <div className="container">
            <h1>Not Found</h1>
            {/* In case of error.. re-render app component */}
            <a href="/">Click here to go back to home page</a>
        </div>   
    );
}

export default NotFound;