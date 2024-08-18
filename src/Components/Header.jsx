import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Header.css';
import { FaLock, FaUserPen } from 'react-icons/fa6';

const Header = () => {
    return (
        <div className='mx-12 mt-6' >
            <div className="flex items-center justify-between bg-base-100">
                <div className="">
                    <p className='text-4xl font-bold'></p>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 gap-6 text-base">
                        <li>
                            <NavLink to="/login">
                                <FaLock /> Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up">
                                <FaUserPen /> Get Registered
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
