import { FaHome, FaBriefcase, FaEnvelope, FaInfo } from 'react-icons/fa';
import './Navbar.css';
import { ComponentType } from 'react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const HomeIcon = FaHome as ComponentType;
const BriefcaseIcon = FaBriefcase as ComponentType;
const EnvelopeIcon = FaEnvelope as ComponentType;
const InfoIcon = FaInfo as ComponentType;

function Navbar({ setCurrentPage }: NavbarProps) {
  return (
    <div className="navbar">
      <button onClick={() => setCurrentPage('home')} className="nav-item">
        <HomeIcon />
      </button>

      <button onClick={() => setCurrentPage('infor')} className="nav-item">
        <InfoIcon />
      </button>

      <button onClick={() => setCurrentPage('work')} className="nav-item">
        <BriefcaseIcon />
      </button>

      <button onClick={() => setCurrentPage('contact')} className="nav-item">
        <EnvelopeIcon />
      </button>
    </div>
  );
}

export default Navbar;