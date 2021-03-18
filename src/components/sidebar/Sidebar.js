import React from 'react'
import "./sidebar.css";
function Sidebar({sidebarOpen,closeSidebar}) {
    return (
        <div id="sidebar" className={sidebarOpen?'sidebar-responsive':""}>
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <b>dashboard</b>
                    <h1>Menu</h1>

                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={()=>closeSidebar()}></i>

            </div>
<div className="sidebar_menu">
    <div className="sidebar__link active_menu_link">
        <i className="fa fa-home"></i>
        <a href="#">Dashboard</a>
    </div>
    <h2>MNG</h2>
    <div className="sidebar__link">
 <i className="fa fa-user-secret"></i>
 <a href="#">Admin Management</a>       
    </div>
    <div className="sidebar__link">
        <i className="fa fa-building-o"></i>
        <a href="#">company management</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-wrench"></i>
        <a href="#">Employee Management</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-archive"></i>
        <a href="#">WareHouse</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-handshake-o"></i>
        <a href="#">Contacts</a>
    </div>
    <h2>LEAVE</h2>
    <div className="sidebar__link">
        <i className="fa fa-question"></i>
        <a href="#">Requests</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-sign-out"></i>
        <a href="#">Leave policy</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-calendar-check-o"></i>
        <a href="#">Special Days</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-files-o"></i>
        <a href="#">Apply for leave</a>
    </div>
    <h2>PAYROLL</h2>
    <div className="sidebar__link">
        <i className="fa fa-money"></i>
        <a href="#">Payroll</a>
    </div>
    <div className="sidebar__link">
        <i className="fa fa-briefcase"></i>
        <a href="#">Paygrade</a>
    </div>
    <div className="sidebar__logout">
        <i className="fa fa-poweroff"></i>
        <a href="#">Log out</a>
    </div>
</div>
        </div>
    )
}

export default Sidebar
