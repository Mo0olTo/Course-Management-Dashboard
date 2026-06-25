import { CourseCategory } from "../../../shared/enums/course.category";
import { CourseStatus } from "../../../shared/enums/courses.status";

export interface CreateCourse {
    courseName: string;
    instructorName: string;
    category: CourseCategory;
    duration: number | null;
    price: number | null;
    status: CourseStatus;
    description:string|null;
    
  }