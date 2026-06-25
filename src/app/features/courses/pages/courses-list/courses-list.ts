import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesFacade } from '../../facade/courses.facade';
import { CourseStatus } from '../../../../shared/enums/courses.status';
import { Router } from '@angular/router';
import { ConfirmationDialog } from "../../../../shared/components/confirmation-dialog/confirmation-dialog";
import { MessageService } from 'primeng/api';
import { ReusableTable } from "../../../../shared/components/reusable-table/reusable-table";
import { ColumnType } from '../../../../shared/enums/column.type';
import { Loading } from "../../../../shared/components/loading/loading";

@Component({
  selector: 'app-courses-list',
  imports: [DatePipe, DecimalPipe, TitleCasePipe, FormsModule, ConfirmationDialog, ReusableTable, Loading],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
})
export class CoursesList implements OnInit {
  readonly FACADE = inject(CoursesFacade);
  private readonly router=inject(Router)
  private readonly messageService = inject(MessageService);

   courses = this.FACADE.courses;
   loading = this.FACADE.loading;
   error = this.FACADE.error; 

   headers = [
    'Course',
    'Instructor',
    'Category',
    'Duration',
    'Price',
    'Status',
    'Created',
    'Actions'
  ]; 

  columns = [
    {
      key: 'courseName',
      header: 'Course',
      type: ColumnType.TEXT
    },
    {
      key: 'instructorName',
      header: 'Instructor',
      type: ColumnType.TEXT
    },
    {
      key: 'category',
      header: 'Category',
      type: ColumnType.CATEGORY
    },
    {
      key: 'duration',
      header: 'Duration',
      type: ColumnType.DURATION
    },
    {
      key: 'price',
      header: 'Price',
      type: ColumnType.PRICE
    },
    {
      key: 'status',
      header: 'Status',
      type: ColumnType.STATUS
    },
    {
      key: 'createdDate',
      header: 'Created',
      type: ColumnType.DATE
    }
  ];

  // Search + pagination state
   searchTerm = signal('');
   currentPage = signal(1);
   pageSize = 20;


  showConfirm = signal<boolean>(false);
  selectedCourseId=signal<string | null >(null);
  selectedStatus = signal<CourseStatus | 'All'>('All');
  
  showFilter = signal(false);

  // Filtered list (search)
  readonly filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
  const status = this.selectedStatus();

  return this.courses().filter(course => {
    const matchesSearch =
      !term ||
      course.courseName.toLowerCase().includes(term) ||
      course.instructorName.toLowerCase().includes(term) ||
      course.category.toLowerCase().includes(term) ||
      course.status.toLowerCase().includes(term);

    const matchesStatus =
      status === 'All' || course.status === status;

    return matchesSearch && matchesStatus;
  });
  });

  // Total pages derived from filtered list
  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredCourses().length / this.pageSize)),
  );

  // Sliced page
  readonly pagedCourses = computed(() => {
    const page = Math.min(this.currentPage(), this.totalPages());
    const start = (page - 1) * this.pageSize;
    return this.filteredCourses().slice(start, start + this.pageSize);
  });

  // Visible page numbers with ellipsis for large page counts
  readonly visiblePages = computed<Array<number | 'ellipsis'>>(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: Array<number | 'ellipsis'> = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    if (current > 3) pages.push('ellipsis');

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (current < total - 2) pages.push('ellipsis');
    pages.push(total);

    return pages;
  });

  readonly startIndex = computed(() => {
    if (this.filteredCourses().length === 0) return 0;
    return (this.currentPage() - 1) * this.pageSize + 1;
  });

  readonly endIndex = computed(() => {
    return Math.min(
      this.currentPage() * this.pageSize,
      this.filteredCourses().length,
    );
  }); 


  

  readonly statusEnum = CourseStatus;

  // Status counters
  readonly activeCount = computed(
    () => this.courses().filter((c) => c.status === CourseStatus.Active).length,
  );
  readonly draftCount = computed(
    () => this.courses().filter((c) => c.status === CourseStatus.Draft).length,
  );
  readonly archivedCount = computed(
    () => this.courses().filter((c) => c.status === CourseStatus.Archived).length,
  );

  ngOnInit(): void {
    this.FACADE.loadCourses();
  }

  initials(name: string): string {
    return name
      .split(' ')
      .map((s) => s[0] ?? '')
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  onSearch(value: string): void {
    this.searchTerm.set(value);
    this.currentPage.set(1);
  }

  addNewCourse():void{
    this.router.navigate(['/courses/add'])
  } 

  viewCourse(id: string) {
    this.router.navigate(['/courses', id]);
  }
  
  editCourse(id: string) {
    this.router.navigate(['/courses', id, 'edit']);
  } 

  deleteCourse(id:string){
    this.selectedCourseId.set(id);
    this.showConfirm.set(true);
  } 
  onConfirmDelete() {
    const id = this.selectedCourseId();

    if (!id) return;
  
    this.FACADE.deleteCourse(id);
  
    this.showConfirm.set(false);
    this.selectedCourseId.set(null);
    this.messageService.add({
      severity: 'success',
      summary: 'Deleted',
      detail: 'Course deleted successfully'
    });
  }
  
  onCancelDelete() {
    this.showConfirm.set(false)
    this.selectedCourseId.set(null)
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  previousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  } 


 


toggleFilter(): void {
  this.showFilter.update(value => !value);
}

}
