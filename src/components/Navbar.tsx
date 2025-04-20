import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LockKeyhole, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <LockKeyhole className={`w-7 h-7 ${isScrolled ? 'text-primary-700' : 'text-primary-600'}`} />
          <span className={`font-medium text-xl ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Evoke Solutions
          </span>
        </Link>
        <nav>
          <div className="relative group">
            <Link 
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 min-h-[40px] px-5 rounded-md font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                  : 'bg-white text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Request Private Review</span>
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 px-4 py-3 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm text-neutral-600">
              Private 1:1 session to review your Bitcoin custody and key structure.
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;