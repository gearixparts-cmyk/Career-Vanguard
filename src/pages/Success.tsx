import { SEO } from '@/components/SEO';
import { Quote } from 'lucide-react';

export default function Success() {
  const testimonials = [
    {
      name: "Rahim Uddin",
      role: "Recommended, 44th BCS (Education)",
      text: "Payar sir's guidance was instrumental in my written exam preparation. His analysis of data presentation changed how I approached the exam."
    },
    {
      name: "Sadia Afrin",
      role: "Senior Officer, Sonali Bank",
      text: "I was struggling with Math for bank exams. The shortcuts and techniques taught here helped me solve problems in seconds."
    },
    {
      name: "Tanvir Ahmed",
      role: "Recommended, 43rd BCS (Police)",
      text: "The mock viva sessions gave me the confidence I needed. The feedback was brutal but necessary for my improvement."
    }
  ];

  return (
    <>
      <SEO 
        title="Success Stories" 
        description="See the achievements of our students and the impact of Career Vanguard's mentorship." 
      />
      
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Hall of Fame</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Celebrating the dedication and hard work of our students who have achieved their dreams.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Student Testimonials</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl relative">
                <Quote className="absolute top-8 right-8 text-blue-100 w-12 h-12" />
                <p className="text-slate-600 mb-6 relative z-10 italic">"{item.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12">Our Achievement Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-white">
                 <img 
                   src={`https://picsum.photos/seed/success${i}/600/800`} 
                   alt="Success Story" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                   referrerPolicy="no-referrer"
                 />
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}
