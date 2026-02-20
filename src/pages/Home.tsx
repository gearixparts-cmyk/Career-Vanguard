import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Award, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Home() {
  const handleEnrollClick = () => {
    openWhatsApp("Hello, I am interested in enrolling in your courses. Please provide me with more details.");
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Career Vanguard - Your Trusted Guide For BCS & Government Job Success. Led by Payar Hossain Sajib, 45th BCS Administration (Recommended)." 
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Admissions Open for 47th BCS
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Your Trusted Guide For <span className="text-blue-900">BCS & Govt Job</span> Success
              </h1>
              
              <div className="mb-8 space-y-2 text-lg text-slate-600">
                <p className="font-bold text-slate-900">Payar Hossain Sajib</p>
                <p>BCS Administration (Recommended) – 45th</p>
                <p>Assistant Manager, Biman Bangladesh Airlines Ltd.</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleEnrollClick}
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition-all hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  Enroll Now <ArrowRight size={18} />
                </button>
                <Link 
                  to="/contact" 
                  className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-all hover:border-slate-300"
                >
                  Contact Us
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                      {i}
                    </div>
                  ))}
                </div>
                <p>Join <span className="font-bold text-slate-900">9.4K+</span> followers on Facebook</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto bg-slate-100">
                {/* 
                  NOTE: Using a placeholder that resembles a professional photo. 
                  The user provided URL 'https://ibb.co.com/yFhK7h5V' appears to be a viewer link, not a direct image source.
                  For production, this src should be replaced with the direct image file URL.
                */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Payar Hossain Sajib" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-serif font-bold text-xl">Payar Hossain Sajib</p>
                  <p className="text-sm opacity-90">BCS Administration (Recommended) - 45th</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Award className="w-8 h-8 mx-auto text-blue-300" />
              <h3 className="text-3xl font-bold font-serif">45th</h3>
              <p className="text-blue-200 text-sm">BCS Admin Recommended</p>
            </div>
            <div className="space-y-2">
              <Users className="w-8 h-8 mx-auto text-blue-300" />
              <h3 className="text-3xl font-bold font-serif">9.4K+</h3>
              <p className="text-blue-200 text-sm">Community Members</p>
            </div>
            <div className="space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-blue-300" />
              <h3 className="text-3xl font-bold font-serif">50+</h3>
              <p className="text-blue-200 text-sm">Successful Students</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="w-8 h-8 mx-auto text-blue-300" />
              <h3 className="text-3xl font-bold font-serif">5+</h3>
              <p className="text-blue-200 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Premium Courses</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Designed by experts to streamline your preparation and maximize your chances of success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "BCS Preliminary Masterclass", desc: "Comprehensive coverage of all BCS preliminary topics with regular model tests." },
              { title: "Written Exam Strategy", desc: "In-depth analysis and writing techniques for the BCS written examination." },
              { title: "Viva Voce Excellence", desc: "Mock interviews and grooming sessions to boost your confidence for the final hurdle." }
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{course.desc}</p>
                <Link to="/courses" className="text-blue-900 font-medium text-sm hover:underline flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="inline-block border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Why Choose Career Vanguard?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Authentic Mentorship</h4>
                    <p className="text-slate-600 text-sm">Direct guidance from a BCS Cadre (Recommended) who knows the journey inside out.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Structured Syllabus</h4>
                    <p className="text-slate-600 text-sm">We don't just teach topics; we teach you how to study effectively and efficiently.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Community Support</h4>
                    <p className="text-slate-600 text-sm">Join a community of serious aspirants who push each other to excel.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about" className="text-blue-900 font-medium hover:underline">Read our full story &rarr;</Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
               <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img 
                    src="https://picsum.photos/seed/seminar/800/800" 
                    alt="Seminar Session" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                 <p className="font-serif italic text-slate-800">"Success is not just about hard work, it's about the right strategy."</p>
                 <p className="text-xs text-slate-500 mt-2 font-bold uppercase">- Payar Hossain Sajib</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
