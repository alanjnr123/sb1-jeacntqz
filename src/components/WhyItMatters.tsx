import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Landmark, Lock } from 'lucide-react';

interface StatProps {
  percentage: number;
  description: string;
  source: string;
}

const Stat: React.FC<StatProps> = ({ percentage, description, source }) => {
  return (
    <div className="bg-white rounded-lg p-8 border border-neutral-200">
      <motion.div 
        className="text-4xl md:text-5xl font-medium text-primary-600 mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {percentage}%
      </motion.div>
      <p className="text-neutral-700 mb-4">{description}</p>
      <p className="text-sm text-neutral-500">{source}</p>
    </div>
  );
};

interface SolutionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const WhyItMatters: React.FC = () => {
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
            The Challenges HNW Investors Face
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Stat 
              percentage={77}
              description="of family offices say key loss and cyber risk are the top barriers to crypto adoption"
              source="BNY Mellon Family Office Report, 2024"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Stat 
              percentage={74}
              description="cite regulatory uncertainty as a critical blocker"
              source="BNY Mellon Family Office Report, 2024"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Stat 
              percentage={40}
              description="of UK HNWIs already hold crypto, and 46% plan to increase exposure"
              source="Saltus Wealth Index, 2024"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg text-neutral-600 mb-12 text-center"
          >
            Most high-net-worth portfolios still rely on single-key wallets, exchanges or inheritance blind spots, exposing them to operational, legal and reputational risk. These setups simply don't hold up at scale.
          </motion.p>

          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-medium mb-8 text-center"
          >
            Our Solution
          </motion.h3>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <SolutionItem 
                icon={<Lock className="w-5 h-5 text-primary-700" />}
                title="Multi-Signature Wallet Architecture"
                description="Eliminate single points of failure. Clients hold two keys, we hold one for emergency recovery. Non-custodial and UK-compliant."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SolutionItem 
                icon={<Landmark className="w-5 h-5 text-primary-700" />}
                title="Inheritance and Continuity Planning"
                description="Structured documentation, legal coordination and family onboarding for long-term resilience."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SolutionItem 
                icon={<ShieldCheck className="w-5 h-5 text-primary-700" />}
                title="Discreet, UK-Based Advisory"
                description="A private bank approach to Bitcoin strategy, not an app. Built for serious portfolios."
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;