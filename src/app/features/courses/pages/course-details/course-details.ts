import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe, DatePipe } from '@angular/common';
import { CoursesFacade } from '../../facade/courses.facade';
import { badgeClass, categoryColor } from '../../../../shared/utils/table-style.utils';
import { Loading } from "../../../../shared/components/loading/loading";

@Component({
  selector: 'app-course-details',
  imports: [DecimalPipe, DatePipe, Loading],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
})
export class CourseDetails implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly facade = inject(CoursesFacade);

  readonly course = this.facade.selectedCourse;
  readonly loading = this.facade.detailLoading;
  readonly error = this.facade.detailError;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.facade.loadCourseById(id);
    } else {
      this.router.navigate(['/courses']);
    }
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }

   statusClasses = computed(() =>
     badgeClass(this.course()?.status ?? '') ); 


   categoryClasses = computed(() =>
    categoryColor(this.course()?.category ?? '')
  );
}



