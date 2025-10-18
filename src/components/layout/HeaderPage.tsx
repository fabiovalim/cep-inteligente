import { useState, useEffect } from 'react';
import { BoxArrowInLeft } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

export const HeaderPage = () => {
  return (
    <header>
      <nav className={`navbar-page navbar navbar-expand-lg navbar-dark fixed-top`}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/"><BoxArrowInLeft size={30} className='me-2' /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};