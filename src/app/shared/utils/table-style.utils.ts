import { CourseStatus } from "../enums/courses.status";

export function badgeClass(status: string): string {
    switch (status) {
        case CourseStatus.Active:
          return 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200 ' +
                 'dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-500/30';
        case CourseStatus.Draft:
          return 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 ' +
                 'dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-500/30';
        case CourseStatus.Archived:
          return 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200 ' +
                 'dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-500/30';
        default:
          return 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200 ' +
                 'dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-500/30';
      }
  }

  export function categoryColor(category: string): string {
    const map: Record<string, string> = {
        Frontend:        'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 ' +
                         'dark:bg-blue-950/60 dark:text-blue-300 dark:ring-blue-500/30',
        Backend:         'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 ' +
                         'dark:bg-blue-950/60 dark:text-blue-300 dark:ring-blue-500/30',
        Design:          'bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-200 ' +
                         'dark:bg-pink-950/60 dark:text-pink-300 dark:ring-pink-500/30',
        Mobile:          'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200 ' +
                         'dark:bg-violet-950/60 dark:text-violet-300 dark:ring-violet-500/30',
        'Machine Learning': 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200 ' +
                            'dark:bg-rose-950/60 dark:text-rose-300 dark:ring-rose-500/30',
        'Data Analysis': 'bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200 ' +
                         'dark:bg-teal-950/60 dark:text-teal-300 dark:ring-teal-500/30',
        DevOps:          'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-200 ' +
                         'dark:bg-orange-950/60 dark:text-orange-300 dark:ring-orange-500/30',
        'Cloud Computing': 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200 ' +
                           'dark:bg-sky-950/60 dark:text-sky-300 dark:ring-sky-500/30',
        Cybersecurity:   'bg-red-50 text-red-700 ring-1 ring-inset ring-red-200 ' +
                         'dark:bg-red-950/60 dark:text-red-300 dark:ring-red-500/30',
        'Software Testing': 'bg-lime-50 text-lime-700 ring-1 ring-inset ring-lime-200 ' +
                            'dark:bg-lime-950/60 dark:text-lime-300 dark:ring-lime-500/30',
        Blockchain:      'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-200 ' +
                         'dark:bg-yellow-950/60 dark:text-yellow-300 dark:ring-yellow-500/30',
        'Game Development': 'bg-fuchsia-50 text-fuchsia-700 ring-1 ring-inset ring-fuchsia-200 ' +
                            'dark:bg-fuchsia-950/60 dark:text-fuchsia-300 dark:ring-fuchsia-500/30',
      };
      return map[category] ??
        'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200 ' +
        'dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-500/30';
  }