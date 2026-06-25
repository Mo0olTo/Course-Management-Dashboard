import { Routes } from "@angular/router";

export const COURSES_ROUTES: Routes=[

    {
        path: '',
        loadComponent: () => import('../features/courses/pages/courses-list/courses-list').then((c) => c.CoursesList),
      },
    {
        path: 'add',
        loadComponent: () => import('../features/courses/pages/course-form/course-form').then((c) => c.CourseForm),
      },
    {
        path: ':id',
        loadComponent: () => import('../features/courses/pages/course-details/course-details').then((c) => c.CourseDetails),
      },
    {
        path: ':id/edit',
        loadComponent: () => import('../features/courses/pages/course-form/course-form').then((c) => c.CourseForm),
      },
]