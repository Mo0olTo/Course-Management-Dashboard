import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesFacade } from '../../facade/courses.facade';
import { CreateCourse } from '../../models/create-course';
import { Course } from '../../models/course';
import { CourseCategory } from '../../../../shared/enums/course.category';
import { CourseStatus } from '../../../../shared/enums/courses.status';
import { Loading } from "../../../../shared/components/loading/loading";
import { ThemeToggle } from "../../../../shared/components/theme-toggle/theme-toggle";

type CourseFormControls = {
  courseName: FormControl<string>;
  instructorName: FormControl<string>;
  category: FormControl<string>;
  duration: FormControl<number>;
  price: FormControl<number>;
  status: FormControl<string>;
  description: FormControl<string>;
};

@Component({
  selector: 'app-course-form',
  imports: [ReactiveFormsModule, Loading, ThemeToggle],
  templateUrl: './course-form.html',
  styleUrl: './course-form.scss',
})
export class CourseForm implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly facade = inject(CoursesFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly courseId = signal<string | null>(null);
  readonly isEdit = computed(() => this.courseId() !== null);
  readonly loading = this.facade.loading;
  readonly selectedCourse = this.facade.selectedCourse;

  courseForm: FormGroup<CourseFormControls> = this.fb.group<CourseFormControls>({
    courseName: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    instructorName: this.fb.nonNullable.control('', [Validators.required]),
    category: this.fb.nonNullable.control('', [Validators.required]),
    duration: this.fb.nonNullable.control(0, [
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^[0-9]+$/)
    ]),
    price: this.fb.nonNullable.control(0, [
      Validators.required,
      Validators.min(0),
      Validators.pattern(/^[0-9]+$/),
    ]),
    status: this.fb.nonNullable.control('', [Validators.required]),
    description: this.fb.nonNullable.control('', [Validators.maxLength(500)]),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseId.set(id);
      this.facade.loadCourseById(id);
    } 
  }
  

  constructor() {
    effect(() => {
      const course = this.selectedCourse();
      
      const isEdit = this.isEdit();
      if (!isEdit || !course) return;

  
      this.courseForm.patchValue({
        courseName: course.courseName,
        instructorName: course.instructorName,
        category: course.category,
        duration: course.duration ??1,
        price: course.price ??0,
        status: course.status,
        description: course.description ?? '',
      });
    });
  }



  submit(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const form = this.courseForm.getRawValue();
    const payload: CreateCourse = {
      courseName: form.courseName,
      instructorName: form.instructorName,
      category: form.category as CourseCategory,
      duration: form.duration,
      price: form.price,
      status: form.status as CourseStatus,
      description: form.description ?? null,
    };

    const id = this.courseId();
    if (id) {
      // Update — keep id + createdDate, send the rest as the course payload.
      const existing = this.selectedCourse();
      const updated: Course = {
        id,
        courseName: payload.courseName,
        instructorName: payload.instructorName,
        category: payload.category,
        duration: payload.duration,
        price: payload.price,
        status: payload.status,
        description: payload.description ?? undefined,
        createdDate: existing?.createdDate ?? new Date(),
      };
      this.facade.updateCourse(id, updated);
    } else {
      this.facade.createCourse(payload);
    }
  }

  onCancel(): void {
  
      this.router.navigate(['/courses']);
    
  }
}
