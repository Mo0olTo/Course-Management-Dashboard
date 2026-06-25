import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { CourseService } from "../services/courseService/course-service";
import { Course } from "../models/course";
import { finalize, Subject, takeUntil } from "rxjs";
import { CreateCourse } from "../models/create-course";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
  })

export class CoursesFacade{

  private readonly coursesService=inject(CourseService)
  private readonly destroy$ = new Subject<void>();
  private readonly messageService = inject(MessageService);
  private readonly router=inject(Router)




  readonly courses = signal<Course[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);


  readonly selectedCourse = signal<Course | null>(null);
  readonly detailLoading = signal(false);
  readonly detailError = signal<string | null>(null);

  loadCourses(): void {
    this.loading.set(true);
    this.error.set(null);

    this.coursesService
      .getCourses()
      .pipe(finalize(() => this.loading.set(false)),
            takeUntil(this.destroy$),)
      .subscribe({
        next: (courses) => {
          this.courses.set(courses);
          console.log(this.courses());
          
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);

          this.error.set(
            'Failed to load courses. Please try again later.'
          );

          this.loading.set(false);
        },
      });
  }

  loadCourseById(id: string): void {
    this.detailLoading.set(true);
    this.detailError.set(null);
    this.selectedCourse.set(null);

    this.coursesService
      .getCourseById(id)
      .pipe(
        finalize(() => this.detailLoading.set(false)),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (course) => {
          this.selectedCourse.set(course);
          this.detailLoading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.detailError.set('Failed to load course details. Please try again later.');
          this.detailLoading.set(false);
        },
      });
  }

  createCourse(data: CreateCourse): void {
    const course: Course = {
      ...data,
      id: crypto.randomUUID(),
      createdDate: new Date()
    };
  
    this.loading.set(true);
  
    this.coursesService.createCourse(course)
      .pipe(
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (createdCourse) => {
          this.courses.update(courses => [
            createdCourse,
            ...courses
          ]);

          // toast message
          this.messageService.add({
            severity: 'success',
            summary: 'Added',
            detail: 'Course Added successfully'
          });

          setTimeout(() => {
            this.router.navigate(['/courses']);
          }, 4000);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong'
          });
          this.error.set('Failed to create course');
        }
      });
  }

  updateCourse(id: string, data: Course): void {
    this.loading.set(true);
    this.error.set(null);

    this.coursesService
      .updateCourse(id, data)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (updated) => {
          this.courses.update((list) =>
            list.map((c) => (c.id === id ? updated : c)),
          );

          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Course updated successfully',
          });

          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update course',
          });
          this.error.set('Failed to update course');
        },
      });
  }

  deleteCourse(id:string):void{
    this.loading.set(true);
    this.error.set(null); 
    
    this.coursesService.deleteCourse(id).pipe(
      finalize(() => this.loading.set(false)),
            takeUntil(this.destroy$),
    ).subscribe({
      next:(res)=>{
        this.courses.update(courses =>
          courses.filter(course => course.id !== id)
        );
        // add toast here
           // toast message
         

        console.log('Course deleted successfully');
        this.loading.set(false)
      },error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong'
        });

        this.error.set(
          'Failed to load courses. Please try again later.'
        );

        this.loading.set(false);
    }})
  }

}