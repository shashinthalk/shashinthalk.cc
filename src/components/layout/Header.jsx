import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import SideBarPannel from "../ui/SideBarPannel";

export default function Header() {

  const navigation = [
    { name: 'About', to: 'about', current: true },
    { name: 'Projects', to: 'projects', current: false },
    { name: 'Contact', to: 'contact', current: false }
  ]

  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
        <div className={`w-full fixed transition-transform duration-300 z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow`}>
          <div className="flex justify-center z-50 bg-background">
            <div className="container flex justify-between items-center p-5 md:px-2 md:py-8 text-links">
              <div className="text-3xl font-thin">
                <Link to='/' className="">shashinthalk.cc</Link>
              </div>
              <nav className='hidden md:block'>
                  <ul className="flex space-x-6">
                      {
                        navigation.map((navItem) => (
                          <li><Link to={navItem.to} className="text-lg hover:text-links-hover">{navItem.name}</Link></li>
                        ))
                      }
                  </ul>
              </nav>
              <button onClick={() => setMenuOpen(true)} className="md:hidden text-3xl">
                  <CgMenuGridO />
              </button>
              {
                menuOpen && (
                  <SideBarPannel className="" navItems={navigation} onClose={() => setMenuOpen(false)}/>
                )
              }
            </div>
          </div>
        </div>
    </>
  ) 
}
