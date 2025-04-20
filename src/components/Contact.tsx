import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Users, FileText, Cog, Shield } from 'lucide-react';

interface FormData {
  clientType: string;
  fullName?: string;
  email?: string;
  companyName?: string;
  contactName?: string;
  businessEmail?: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'individual' | 'corporate'>('individual');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Prepare form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('formType', formType);
      
      // Add all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value.toString());
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      reset();
      alert('Thank you for your message. We will be in touch shortly.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 md:p-10"
          >
            <div className="flex space-x-2 mb-8">
              <button
                type="button"
                onClick={() => setFormType('individual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  formType === 'individual'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Individual
              </button>
              <button
                type="button"
                onClick={() => setFormType('corporate')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  formType === 'corporate'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Corporate
              </button>
            </div>

            {/* Hidden form for Netlify form detection */}
            <form name="contact" data-netlify="true" hidden>
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="formType" />
              <input type="text" name="fullName" />
              <input type="email" name="email" />
              <input type="text" name="companyName" />
              <input type="text" name="contactName" />
              <input type="email" name="businessEmail" />
              <input type="tel" name="phone" />
              <textarea name="message"></textarea>
            </form>

            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="formType" value={formType} />
              
              {formType === 'individual' ? (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", { required: "Full name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Company Name"
                    {...register("companyName", { required: "Company name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Contact Person's Name"
                    {...register("contactName", { required: "Contact name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Business Email"
                    {...register("businessEmail", { 
                      required: "Business email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                  />
                </>
              )}
              
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
              />
              
              <textarea
                placeholder="How can we help you? (Optional)"
                {...register("message")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white resize-none"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-full font-medium hover:bg-primary-700 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </button>
              
              <p className="text-sm text-neutral-500 text-center">
                Your information is private. We never share client data with third parties.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8"
          >
            <h2 className="text-2xl font-medium mb-4">What to Expect From Your Review Process</h2>
            
            <p className="text-neutral-600 mb-8">
              We work with a small number of clients to deliver secure, resilient digital asset infrastructure. This process is deliberately structured and highly personalised.
            </p>

            <div className="space-y-8">
              <div className="pb-8 border-b border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">1. Discovery</h3>
                    <p className="text-neutral-600">Private onboarding call to understand your current custody structure, risk tolerances, and long-term priorities.</p>
                  </div>
                </div>
              </div>

              <div className="pb-8 border-b border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">2. Custody Audit & Risk Brief</h3>
                    <p className="text-neutral-600">You'll receive a personalised summary outlining vulnerabilities, single points of failure, and planning considerations — including inheritance continuity, internal governance, and backup strategy.</p>
                  </div>
                </div>
              </div>

              <div className="pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Cog className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">3. Implementation Roadmap</h3>
                    <p className="text-neutral-600">If appropriate, we'll propose a full multi-sig wallet setup or redesign, including governance support, documentation, and optional key management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                All reviews are bespoke, non-custodial, and advisory only. There is no obligation to proceed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;