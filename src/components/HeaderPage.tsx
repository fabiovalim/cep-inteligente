import { BoxArrowInLeft } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

export const HeaderPage = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-page">
      <div className="container-fluid">
        <div className="fw-bold navbar-brand icon-nav-page">
          <p>Zetta Lab 2025</p>
        </div>
        <div className="ms-auto">
          <Link to="/"><BoxArrowInLeft size={30} className='me-2' /></Link>
        </div>
      </div>
    </nav>
  );
};