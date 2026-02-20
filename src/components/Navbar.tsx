import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, Users, Phone, Home, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Success', path: '/success', icon: GraduationCap },
    { name: 'Gallery', path: '/gallery', icon: FileText }, // Using FileText as generic placeholder if needed, or Image
    { name: 'Notices', path: '/notices', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-blue-800 transition-colors">
              CV
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-blue-900 leading-none">Career Vanguard</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Guiding Ambition</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-700',
                  location.pathname === link.path ? 'text-blue-900 font-semibold' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/courses"
              className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-900 font-medium'
                      : 'text-slate-600 hover:bg-slate-50'
                  )}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/courses"
                  className="block w-full text-center bg-blue-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
