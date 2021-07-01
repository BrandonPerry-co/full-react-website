import React from 'react';


function Nav() {
    return (
        <nav className="NavBar">
            <h2>Logo</h2>
            <div className='navDiv'>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/signin">Signin</a>
            </div>
            
        </nav>
    )
}

export default Nav;
