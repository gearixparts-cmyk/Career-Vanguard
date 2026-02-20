import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-blue-900 font-serif font-bold text-lg">
                CV
              </div>
              <span className="font-serif font-bold text-xl text-white">Career Vanguard</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Guiding Your Ambition To Success. Your trusted partner for BCS preparation and government job success.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=100063803335193" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:payar.hossain95@gmail.com" 
                className="hover:text-white transition-colors" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/8801642775100" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Our Courses</Link></li>
              <li><Link to="/success" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/notices" className="hover:text-white transition-colors">Notices</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">BCS Preparation</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Bank Job Prep</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Viva Guidance</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Mock Tests</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Chittagong, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <a href="tel:+8801642775100" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} className="shrink-0" />
                  <span>+880 1642-775100</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:payar.hossain95@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={18} className="shrink-0" />
                  <span>payar.hossain95@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col items-center gap-4 text-sm text-slate-500">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Career Vanguard. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="text-xs text-slate-600 mt-4 text-center">
            Website made by <a href="https://mohammadtonmoy.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">Mohammad Tonmoy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
