import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/layout/navbar-profile.css'

function ProfileDD() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("trainerName");
        navigate("/");
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="profile-dropdown" ref={dropdownRef}>
            <img
                src="/images/profile/user-1.jpg"
                alt="Perfil"
                className="profile-avatar cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div className="dropdown-menu show">
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </div>
    );
}

export default ProfileDD;
