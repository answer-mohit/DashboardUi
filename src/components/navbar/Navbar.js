import React from 'react'
import "./Navbar.css";
function Navbar({sidebarOpen,openSidebar}) {
    return (
        <nav className="navbar">
        <div className="nav_icon" onClick={()=>openSidebar()}>
        <i className="fa fa-bars"></i>

        </div>
            <div className="navbar__left">
                <a href="#">subscribers</a>
                <a href="#">video Managment</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <b>Dashboard</b>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
