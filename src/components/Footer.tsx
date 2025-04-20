import React from 'react';
import { motion } from 'framer-motion';
import { LockKeyhole, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center">
            <LockKeyhole className="w-6 h-6 text-primary-500 mr-2" />
            <span className="text-white font-medium">Evoke Solutions</span>
          </div>
          
          <div className="text-sm text-center md:text-right max-w-xl">
            <p className="mb-4">
              <strong className="text-neutral-300">Legal disclaimer:</strong> Evoke Digital Solutions Ltd does not provide investment advice or execute trades. We do not custody client funds or assets. Our services are limited to non-custodial digital asset consulting, education, and key structure planning.
            </p>
            <div className="flex items-center justify-center md:justify-end mb-4">
              <Mail className="w-4 h-4 mr-2 text-primary-500" />
              <a href="mailto:contact@evokesolutions.io" className="text-primary-400 hover:text-primary-300 transition-colors">
                contact@evokesolutions.io
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-6 text-xs">
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1 text-primary-500" />
                <span>Privacy Policy (Coming Soon)</span>
              </span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-6 border-t border-neutral-800 text-xs text-neutral-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Evoke Solutions Ltd. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;