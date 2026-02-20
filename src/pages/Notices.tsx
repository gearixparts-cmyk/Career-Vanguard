import { SEO } from '@/components/SEO';
import { Calendar, FileText, Bell } from 'lucide-react';

export default function Notices() {
  const notices = [
    {
      title: "46th BCS Preliminary Result Published",
      date: "May 15, 2025",
      category: "Exam Update",
      excerpt: "The Bangladesh Public Service Commission has published the results for the 46th BCS Preliminary exam. Check your registration number here."
    },
    {
      title: "New Batch Orientation: 47th BCS Advance",
      date: "June 01, 2025",
      category: "Academy News",
      excerpt: "Orientation class for the new batch will be held on Friday at 10:00 AM. All enrolled students are requested to attend."
    },
    {
      title: "Special Seminar on 'Mental Health during Prep'",
      date: "June 10, 2025",
      category: "Event",
      excerpt: "Join us for a session with Dr. X on how to maintain mental well-being during the rigorous BCS preparation journey."
    }
  ];

  return (
    <>
      <SEO 
        title="Notices & Updates" 
        description="Latest news, exam updates, and circulars for BCS and Government Job aspirants." 
      />
      
      <div className="bg-slate-50 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Notices & Updates</h1>
            <p className="text-slate-600">Stay informed about exam schedules, circulars, and academy news.</p>
          </div>

          <div className="space-y-6">
            {notices.map((notice, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0 flex sm:flex-col items-center sm:justify-center gap-2 sm:gap-0 bg-blue-50 text-blue-900 p-4 rounded-lg min-w-[100px] text-center">
                    <Calendar size={20} className="mb-1" />
                    <span className="text-sm font-bold block">{notice.date.split(',')[0]}</span>
                    <span className="text-xs text-blue-700">{notice.date.split(',')[1]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {notice.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {notice.excerpt}
                    </p>
                    <button className="text-blue-900 text-sm font-medium hover:underline flex items-center gap-1">
                      Read Details <FileText size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
