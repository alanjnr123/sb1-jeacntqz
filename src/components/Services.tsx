import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Briefcase, Users, ShieldCheck } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-5 p-6 rounded-lg">
      <div className="flex-shrink-0">
        <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
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
    <section className="section bg-neutral-50" id="services">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Our Services
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Comprehensive Bitcoin security and management solutions tailored to your specific needs.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Service 
              icon={<KeyRound className="w-6 h-6 text-primary-700" />}
              title="Multi-Signature Wallet Structuring"
              description="Custom multi-signature setups that distribute risk and provide robust security for your Bitcoin. We implement industry best practices for maximum protection."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Service 
              icon={<Users className="w-6 h-6 text-primary-700" />}
              title="Inheritance Planning & Key Redundancy"
              description="Comprehensive succession planning ensures your digital assets remain accessible to designated beneficiaries, with clear protocols and documentation."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Service 
              icon={<Briefcase className="w-6 h-6 text-primary-700" />}
              title="SME Treasury Advisory"
              description="Strategic guidance for businesses integrating Bitcoin into their treasury, with governance frameworks and compliance procedures tailored to your company."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Service 
              icon={<ShieldCheck className="w-6 h-6 text-primary-700" />}
              title="Key Support & Emergency Access"
              description="We hold 1 of 3 keys non-custodially, providing an additional layer of security and emergency access while ensuring you maintain full control of your assets."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;