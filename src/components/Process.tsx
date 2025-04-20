import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, LayoutGrid, KeyRound, Shield } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium text-lg z-10 relative">
            {number}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-100 w-16 h-16 rounded-full -z-10"></div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-primary-700">
            {icon}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            How It Works
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Our structured process ensures a secure, tailored solution for your digital assets.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Step 
              number={1}
              icon={<BookOpen className="w-5 h-5" />}
              title="Discovery Call"
              description="A confidential consultation to understand your specific needs, risk profile, and objectives for your digital assets."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Step 
              number={2}
              icon={<LayoutGrid className="w-5 h-5" />}
              title="Custody Audit & Planning"
              description="Comprehensive assessment of your current setup and development of a tailored security architecture and governance framework."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Step 
              number={3}
              icon={<KeyRound className="w-5 h-5" />}
              title="Wallet Setup & Documentation"
              description="Secure implementation of your multi-signature wallet with complete documentation and clear operational procedures."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Step 
              number={4}
              icon={<Shield className="w-5 h-5" />}
              title="Optional Key Support"
              description="Non-custodial key support service providing an extra layer of security and emergency access while maintaining your full control."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;