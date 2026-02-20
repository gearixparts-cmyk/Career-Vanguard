import { SEO } from '@/components/SEO';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Payar Hossain Sajib, the founder of Career Vanguard, and our mission to guide BCS aspirants." 
      />
      
      <div className="bg-slate-50 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">About Career Vanguard</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded by Payar Hossain Sajib, Career Vanguard is more than just a coaching center—it's a mentorship platform dedicated to crafting the next generation of civil servants.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                  <img 
                    src="https://picsum.photos/seed/payar_portrait/800/1000" 
                    alt="Payar Hossain Sajib" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-serif font-bold text-xl text-blue-900 mb-4">Credentials</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <span className="font-bold text-slate-900 block">BCS Administration</span>
                        <span className="text-sm text-slate-600">Recommended (45th BCS)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <span className="font-bold text-slate-900 block">Assistant Manager</span>
                        <span className="text-sm text-slate-600">Biman Bangladesh Airlines Ltd.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <span className="font-bold text-slate-900 block">Professional Mentor</span>
                        <span className="text-sm text-slate-600">Guiding thousands of students</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">The Founder's Story</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p className="mb-4">
                    The journey to becoming a BCS cadre is one of resilience, strategy, and unwavering dedication. Payar Hossain Sajib started this journey with a dream to serve the nation. Through rigorous preparation and a strategic approach to studies, he achieved recommendation in the prestigious BCS Administration cadre in the 45th BCS.
                  </p>
                  <p className="mb-4">
                    Before this achievement, he served as an Assistant Manager at Biman Bangladesh Airlines, gaining valuable corporate and administrative experience. His diverse background allows him to offer a unique perspective on career planning—blending the discipline of the corporate world with the depth of academic preparation required for civil service.
                  </p>
                  <p>
                    Realizing that many talented students fail not due to lack of effort but due to lack of proper guidance, he founded Career Vanguard. His mission is simple: to democratize access to high-quality, strategic mentorship for government job aspirants.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Mission & Vision</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 text-lg">Our Mission</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      To provide authentic, results-oriented mentorship that empowers students to navigate the competitive landscape of BCS and government jobs with confidence.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 text-lg">Our Vision</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      To become the most trusted platform for career development in Bangladesh, known for integrity, quality, and student success.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Why We Are Different</h2>
                <ul className="space-y-4">
                  {[
                    "We focus on 'Smart Study' techniques rather than rote memorization.",
                    "Our syllabus is updated based on the latest question patterns.",
                    "We provide mental support and motivation, which is crucial for the long BCS journey.",
                    "Direct access to successful mentors who have walked the path."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 text-xs font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-slate-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
