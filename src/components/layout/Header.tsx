import { useState, useEffect } from 'react';
import { Book } from "react-bootstrap-icons";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#inicio"><Book size={30} className='me-2' /> Zetta Lab 2025</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#como-funciona">Como funciona?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre-api">API</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre-mim">Sobre Mim</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};