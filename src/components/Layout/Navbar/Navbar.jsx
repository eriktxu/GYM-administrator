import React from "react";
import { Menu } from "lucide-react";
import '../../../styles/layout/layout.css';
import ProfileDD from './ProfileDD';

function Navbar({ toggleSidebar }) {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <button className="btn d-lg-none" onClick={toggleSidebar}>
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            <div className="navbar-right">
                <ProfileDD />
            </div>
        </header>
    );
}

export default Navbar;
