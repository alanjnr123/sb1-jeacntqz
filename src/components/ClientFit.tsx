import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Building } from 'lucide-react';

interface ClientTypeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ClientType: React.FC<ClientTypeProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

const ClientFit: React.FC = () => {
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
    <section className="section bg-primary-50">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Client Fit
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            We work with discerning clients who value security, compliance and long-term planning.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <ClientType 
              icon={<Users className="w-8 h-8 text-primary-700" />}
              title="Private Clients"
              description="Individuals and families seeking professional-grade custody solutions for their digital asset portfolios."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ClientType 
              icon={<Briefcase className="w-8 h-8 text-primary-700" />}
              title="SMEs"
              description="Forward-thinking businesses exploring Bitcoin as a treasury strategy with governance and compliance needs."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ClientType 
              icon={<Building className="w-8 h-8 text-primary-700" />}
              title="Family Offices"
              description="Multi-generational wealth managers seeking long-term asset continuity with sophisticated custody requirements."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientFit;