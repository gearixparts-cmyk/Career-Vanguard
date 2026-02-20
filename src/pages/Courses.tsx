import { SEO } from '@/components/SEO';
import { Check, Clock, Calendar, ArrowRight } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "47th BCS Preliminary Advance Batch",
      description: "A complete foundation course for beginners targeting the 47th BCS. Covers all subjects with basic to advanced concepts.",
      duration: "6 Months",
      classes: "3 Days/Week",
      features: [
        "120+ Live Classes",
        "Lecture Sheets & PDF Notes",
        "Weekly & Monthly Model Tests",
        "Solve Classes for difficult topics",
        "Direct mentorship from Cadres"
      ],
      price: "Coming Soon",
      tag: "Popular"
    },
    {
      title: "BCS Written Excellence Program",
      description: "Focused preparation for the written exam. Emphasis on creative writing, data presentation, and analytical ability.",
      duration: "4 Months",
      classes: "2 Days/Week",
      features: [
        "Subject-wise deep dive",
        "Writing practice & evaluation",
        "Current Affairs analysis",
        "Mathematical reasoning shortcuts",
        "Previous year question analysis"
      ],
      price: "Coming Soon",
      tag: "Advanced"
    },
    {
      title: "Bank Job Math & English Special",
      description: "Targeted preparation for Govt. Bank and Financial Institution exams with special focus on Math and English.",
      duration: "3 Months",
      classes: "2 Days/Week",
      features: [
        "IBA pattern math solving",
        "Vocabulary building techniques",
        "Translation & Précis writing",
        "Bank-specific General Knowledge",
        "Real-time mock tests"
      ],
      price: "Coming Soon",
      tag: "Specialized"
    },
    {
      title: "Viva Voce Grooming Session",
      description: "Prepare for the final hurdle with confidence. Mock boards, body language tips, and situational handling.",
      duration: "1 Month",
      classes: "Weekend Only",
      features: [
        "3 Mock Viva Boards",
        "Individual Feedback",
        "Dress code & etiquette guide",
        "Current affairs briefing",
        "Psychological preparation"
      ],
      price: "Coming Soon",
      tag: "Final Step"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Courses" 
        description="Explore our specialized courses for BCS Preliminary, Written, Bank Jobs, and Viva preparation." 
      />
      
      <div className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Academic Programs</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Structured courses designed to cover every aspect of the syllabus efficiently. Choose the program that fits your goal.
          </p>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-50 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {course.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{course.description}</p>
                
                <div className="flex gap-6 mb-8 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{course.classes}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-sm font-medium">Course Fee</span>
                    <p className="text-lg font-bold text-slate-900">{course.price}</p>
                  </div>
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center gap-2">
                    Enroll Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
