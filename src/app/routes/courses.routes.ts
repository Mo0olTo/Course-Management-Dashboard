import { Routes } from "@angular/router";
import { unsavedChangesGuard } from "../../app/guards/unsaved-changes.guard";

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/courses/pages/courses-list/courses-list').then((c) => c.CoursesList),
  },
  {
    path: 'add',
    loadComponent: () => import('../features/courses/pages/course-form/course-form').then((c) => c.CourseForm),
    canDeactivate: [unsavedChangesGuard]
  },
  {
    path: ':id',
    loadComponent: () => import('../features/courses/pages/course-details/course-details').then((c) => c.CourseDetails),
  },
  {
    path: ':id/edit',
    loadComponent: () => import('../features/courses/pages/course-form/course-form').then((c) => c.CourseForm),
    canDeactivate: [unsavedChangesGuard]
  },
];