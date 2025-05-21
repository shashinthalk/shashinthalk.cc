import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

export default function SideBarPannel( {navItems, className, onClose} ) {
    
    return(
        <div className={`w-screen opacity-95 h-screen bg-primary fixed top-0 left-0 flex items-center justify-center ${className}`}>
            <button onClick={onClose} className="fixed top-5 right-5 text-5xl cursor-pointer">
                <IoIosCloseCircle />
            </button>
            <nav className=''>
                <ul className="flex-col">
                    {
                        navItems.map((navItem) => (
                            <li className="w-full p-3 flex justify-center">
                                <Link onClick={onClose} to={navItem.to} className="text-3xl hover:text-links-hover">
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