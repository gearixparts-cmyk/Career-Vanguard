import { SEO } from '@/components/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';
import { openWhatsApp, createEnrollmentMessage } from '@/lib/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = createEnrollmentMessage(
      formData.name,
      formData.phone,
      formData.email,
      formData.message
    );
    openWhatsApp(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Career Vanguard for admission inquiries or counseling." 
      />
      
      <div className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
              <p className="text-slate-600 mb-12 text-lg">
                Have questions about our courses or need career counseling? We are here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Phone</h3>
                    <p className="text-slate-600 mb-1">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:+8801642775100" className="text-blue-900 font-medium hover:underline text-lg">
                      +880 1642-775100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                    <p className="text-slate-600 mb-1">Our friendly team is here to help.</p>
                    <a href="mailto:payar.hossain95@gmail.com" className="text-blue-900 font-medium hover:underline text-lg">
                      payar.hossain95@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                    <p className="text-slate-600">
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-64 bg-slate-100 rounded-xl overflow-hidden">
                {/* Google Map Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-200">
                  <span className="flex items-center gap-2"><MapPin /> Google Map Embed Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="+880 1..."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
