import React from 'react';
import { Shield, Lock, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
            Discreet. Secure. UK-Based.
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Evoke Solutions is a boutique consultancy helping high-net-worth individuals, family offices and SMEs reduce digital asset risk with inheritance-ready, compliance-first wallet architecture. We specialise in non-custodial multi-signature wallet setups, governance frameworks and key support services. You retain full control while we provide structured resilience.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-700" />
            </div>
            <h3 className="text-xl font-medium mb-2">Non-Custodial</h3>
            <p className="text-neutral-600">
              We never take custody of your assets. Our solutions ensure you maintain complete control of your Bitcoin at all times.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary-700" />
            </div>
            <h3 className="text-xl font-medium mb-2">Compliance-First</h3>
            <p className="text-neutral-600">
              Our UK-based solutions adhere to best practices and regulatory frameworks, providing peace of mind and future-proofing.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Landmark className="w-6 h-6 text-primary-700" />
            </div>
            <h3 className="text-xl font-medium mb-2">Structured Resilience</h3>
            <p className="text-neutral-600">
              Our governance frameworks and key support services ensure your digital assets remain secure and accessible for the long term.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;