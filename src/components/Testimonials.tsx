import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
      <Quote className="w-8 h-8 text-primary-300 mb-4" />
      <p className="text-lg text-neutral-700 mb-4 italic">"{quote}"</p>
      <p className="text-sm text-neutral-500">– {author}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
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
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Why Clients Choose Us
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Our team has helped over a dozen clients privately secure, structure and future-proof their digital asset holdings. From inheritance frameworks to SME treasury strategies, we maintain complete discretion and client control.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Testimonial 
              quote="Evoke made the whole process incredibly easy. What felt overwhelming at first was handled with clarity and precision, a real pleasure to work with."
              author="Private Client, London"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Testimonial 
              quote="We were struggling to find a secure way to manage our Bitcoin for future inheritance. Evoke solved it with a structure we understand and continue to support us when we need them."
              author="HNW Family, South East England"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;