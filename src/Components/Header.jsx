import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaBars, FaTimes, } from 'react-icons/fa';
import { FaLock, FaUserPen } from 'react-icons/fa6';
import './Header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../AuthContextProvider';

const Header = () => {
    const { user, setUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear the user state on logout
            console.log('User logged out');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mx-12 mt-6">
            <div className="flex items-center justify-between bg-base-100">
                <div className="">
                    <p className="text-4xl font-bold"></p>
                </div>
                <div className='md:hidden flex'>
                    {user ? (
                        <>
                            
                                <span className='mr-8'>{user?.displayName}!</span>
                                <button onClick={handleLogout} className='flex pr-6 items-center gap-1'>
                                    <FaSignOutAlt /> Logout
                                </button>
                        </>
                    ) : ""
                    }
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isOpen ? (
                            <div className='absolute top-6 z-20 shadow-xl right-12'>
                                <FaTimes />
                            </div>
                        ) : <FaBars />}
                    </button>
                </div>
                <div className={`md:flex absolute md:static bg-white top-4 right-12 py-6 md:py-0 md:px-0 px-4 items-center shadow-xl md:shadow-none ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="menu md:menu-horizontal lg:flex-row lg:gap-6 text-base lg:flex px-1 gap-6">
                        {user ? (
                            <>
                                <li>
                                    <span>Welcome, {user?.displayName}!</span>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        <FaSignOutAlt /> Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login" onClick={() => setIsOpen(false)}>

                                        <FaLock /> Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sign-up" onClick={() => setIsOpen(false)}>
                                        <FaUserPen /> Get Registered
                                    </NavLink>
                                </li>
                            </>
                        )}
                        <li>
                            <NavLink to="/" onClick={() => setIsOpen(false)}>
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
