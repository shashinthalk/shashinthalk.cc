import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

export default function SideBarPannel( {navItems, className, onClose} ) {
    
    return(
        <div className={`w-screen opacity-95 h-screen bg-primary fixed top-0 left-0 flex items-center justify-center ${className}`}>
            <button onClick={onClose} className="fixed top-4 right-4 text-4xl md:text-5xl cursor-pointer text-links hover:text-links-hover transition-colors duration-300">
                <IoIosCloseCircle />
            </button>
            <nav>
                <ul className="flex flex-col space-y-4 md:space-y-6">
                    {
                        navItems.map((navItem, index) => (
                            <li key={index} className="w-full text-center">
                                <Link 
                                    onClick={onClose} 
                                    to={navItem.to} 
                                    className="text-2xl md:text-3xl text-links hover:text-links-hover transition-colors duration-300"
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

SideBarPannel.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired
};