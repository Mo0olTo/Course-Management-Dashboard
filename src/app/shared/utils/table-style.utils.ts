import { CourseStatus } from "../enums/courses.status";

export function badgeClass(status: string): string {
    switch (status) {
        case CourseStatus.Active:
          return 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20';
        case CourseStatus.Draft:
          return 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20';
        case CourseStatus.Archived:
          return 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/20';
        default:
          return 'bg-gray-100 text-gray-700 ring-1 ring-inset ring-gray-500/20';
      }
  }
  
  export function categoryColor(category: string): string {
    const map: Record<string, string> = {
        Frontend: 'bg-blue-50 text-blue-700',
        Backend: 'bg-indigo-50 text-indigo-700',
        Design: 'bg-pink-50 text-pink-700',
        Mobile: 'bg-violet-50 text-violet-700',
        'Machine Learning': 'bg-rose-50 text-rose-700',
        ' Data Analysis': 'bg-teal-50 text-teal-700',
        DevOps: 'bg-orange-50 text-orange-700',
        'Cloud Computing': 'bg-sky-50 text-sky-700',
        Cybersecurity: 'bg-red-50 text-red-700',
        'Software Testing': 'bg-lime-50 text-lime-700',
        Blockchain: 'bg-yellow-50 text-yellow-700',
        'Game Development': 'bg-fuchsia-50 text-fuchsia-700',
      };
      return map[category] ?? 'bg-gray-50 text-gray-700';
  }