import { CourseStatus } from "../enums/courses.status";

export function badgeClass(status: string): string {
    switch (status) {
        case CourseStatus.Active:
          return 'bg-emerald-950/60 text-emerald-300 ring-1 ring-inset ring-emerald-500/30';
        case CourseStatus.Draft:
          return 'bg-amber-950/60 text-amber-300 ring-1 ring-inset ring-amber-500/30';
        case CourseStatus.Archived:
          return 'bg-slate-800 text-slate-300 ring-1 ring-inset ring-slate-500/30';
        default:
          return 'bg-slate-800 text-slate-300 ring-1 ring-inset ring-slate-500/30';
      }
  }

  export function categoryColor(category: string): string {
    const map: Record<string, string> = {
        Frontend: 'bg-blue-950/60 text-blue-300 ring-1 ring-inset ring-blue-500/30',
        Backend: 'bg-blue-950/60 text-blue-300 ring-1 ring-inset ring-blue-500/30',
        Design: 'bg-pink-950/60 text-pink-300 ring-1 ring-inset ring-pink-500/30',
        Mobile: 'bg-violet-950/60 text-violet-300 ring-1 ring-inset ring-violet-500/30',
        'Machine Learning': 'bg-rose-950/60 text-rose-300 ring-1 ring-inset ring-rose-500/30',
        ' Data Analysis': 'bg-teal-950/60 text-teal-300 ring-1 ring-inset ring-teal-500/30',
        DevOps: 'bg-orange-950/60 text-orange-300 ring-1 ring-inset ring-orange-500/30',
        'Cloud Computing': 'bg-sky-950/60 text-sky-300 ring-1 ring-inset ring-sky-500/30',
        Cybersecurity: 'bg-red-950/60 text-red-300 ring-1 ring-inset ring-red-500/30',
        'Software Testing': 'bg-lime-950/60 text-lime-300 ring-1 ring-inset ring-lime-500/30',
        Blockchain: 'bg-yellow-950/60 text-yellow-300 ring-1 ring-inset ring-yellow-500/30',
        'Game Development': 'bg-fuchsia-950/60 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/30',
      };
      return map[category] ?? 'bg-slate-800 text-slate-300 ring-1 ring-inset ring-slate-500/30';
  }