import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
export function Contact() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  return (
    <section id="contact" className="bg-brandBlack text-brandWhite">
      <div className="grid lg:grid-cols-2 min-h-[800px]">
        {/* Contact Info Side */}
        <div className="p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Ready to upgrade your systems?
            </h3>
            <p className="text-brandWhite/70 text-lg mb-12 max-w-md">
              Contact our technical team for a consultation. We'll assess your
              needs and design a solution that fits perfectly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brandWhite/50 uppercase tracking-wider mb-1">
                    Call Us
                  </h4>
                  <p className="text-xl font-display">+1 (555) 284-8922</p>
                  <p className="text-sm text-brandWhite/50 mt-1">
                    Mon-Fri, 8am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brandWhite/50 uppercase tracking-wider mb-1">
                    Email
                  </h4>
                  <p className="text-xl font-display">service@werker.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brandWhite/50 uppercase tracking-wider mb-1">
                    Headquarters
                  </h4>
                  <p className="text-lg text-brandWhite/80">
                    142 Technical Blvd.
                    <br />
                    Industrial District, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-brandWhite p-12 lg:p-24 flex flex-col justify-center text-brandBlack">
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <h3 className="text-3xl font-display font-bold mb-8">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-brandBlack/70 mb-2">
                  
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe" />
                
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-brandBlack/70 mb-2">
                  
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="+1 (555) 000-0000" />
                
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-brandBlack/70 mb-2">
                  
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                    
                    <option value="">Select a service...</option>
                    <option value="heating">
                      Heating Installation / Repair
                    </option>
                    <option value="cooling">Cooling & AC</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="product">Product Order</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-brandBlack/70 mb-2">
                  
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements...">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full bg-primary text-brandWhite py-4 rounded-sm font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                
                {formStatus === 'idle' &&
                <>
                    <Send size={18} /> Send Request
                  </>
                }
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>);

}