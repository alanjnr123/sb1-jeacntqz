import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Landmark, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-950 to-primary-800 text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Secure Your Digital Assets with Confidence
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-neutral-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Private advisory services helping HNWIs and SMEs structure, secure, and future-proof Bitcoin holdings using multi-signature infrastructure and best-in-class operational security.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact" className="btn-primary shadow-lg">
              Request a Private Review
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap mt-12 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary-300" />
              <span className="text-sm text-neutral-200">Non-custodial</span>
            </div>
            <div className="flex items-center">
              <Landmark className="w-5 h-5 mr-2 text-primary-300" />
              <span className="text-sm text-neutral-200">UK-Based</span>
            </div>
            <div className="flex items-center">
              <Lock className="w-5 h-5 mr-2 text-primary-300" />
              <span className="text-sm text-neutral-200">Full Control</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent"></div>
    </section>
  );
};

export default Hero;