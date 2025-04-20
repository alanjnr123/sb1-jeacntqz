import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleGuideRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsSubmitting(true);
      
      // Prepare form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'guide-request');
      formData.append('email', email);
      formData.append('tag', 'custody-guide');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setShowSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="section bg-primary-900 text-white" id="contact">
      <div className="container-custom">
        <motion.div 
          className="max-w-2xl mx-auto text-center px-6 md:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-medium mb-4"
          >
            Let's Secure Your Digital Asset Setup
          </motion.h3>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-neutral-200 mb-8"
          >
            Request a discreet review of your current custody structure. We'll identify key risks, clarify your options, and propose a tailored multi-sig solution.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 btn-primary bg-white text-primary-900 hover:bg-neutral-100 px-8 py-4 w-full sm:w-auto min-h-[40px] min-w-[240px] group"
            >
              <Shield className="w-5 h-5" />
              <span className="group-hover:underline">Request Private Review</span>
            </Link>

            <p className="text-sm text-neutral-400">
              Discretion guaranteed. No mailing lists. No pressure.
            </p>
          </motion.div>

          {/* Hidden form for Netlify form detection */}
          <form name="guide-request" data-netlify="true" hidden>
            <input type="hidden" name="form-name" value="guide-request" />
            <input type="email" name="email" />
            <input type="hidden" name="tag" value="custody-guide" />
          </form>

          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <p className="text-neutral-300 mb-4">Not ready to speak?</p>
            {showSuccess ? (
              <div className="text-neutral-200">
                <FileText className="w-5 h-5 mx-auto mb-2" />
                <p>Thank you! Check your inbox for the custody guide.</p>
              </div>
            ) : (
              <form 
                onSubmit={handleGuideRequest}
                className="max-w-md mx-auto"
                name="guide-request"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="guide-request" />
                <input type="hidden" name="tag" value="custody-guide" />
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-white text-primary-900 rounded-md font-medium hover:bg-neutral-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Get Guide</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;