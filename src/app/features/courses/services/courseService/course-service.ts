import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { API_ROUTES } from '../../../../core/constants/API_ROUTES';

@Injectable({
  providedIn: 'root',
})
export class CourseService { 
  private readonly http=inject(HttpClient)
  private readonly apiURL=environment.apiUrl


  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiURL}${API_ROUTES.courses.getAll}`)
  }

  getCourseById(id:string):Observable<Course>{
    return this.http.get<Course>(`${this.apiURL}${API_ROUTES.courses.getById(id)}`)
  }

  createCourse(data:Course):Observable<Course>{
    return this.http.post<Course>(`${this.apiURL}${API_ROUTES.courses.create}`,data)
  } 

  updateCourse(id:string , data:Course):Observable<Course>{
    return this.http.put<Course>(`${this.apiURL}${API_ROUTES.courses.update(id)}`,data)
  }
 

  deleteCourse(id:string):Observable<void>{
    return this.http.delete<void>(`${this.apiURL}${API_ROUTES.courses.delete(id)}`)
  }
  




}
