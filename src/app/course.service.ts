import { Injectable } from '@angular/core';
import { COURSES } from './mock-courses';
import { Course } from './course';
import { Observable, of, from } from 'rxjs'
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Observable<Course[]> {
    this.messagesService.add('Fetched Courses')
    return of(COURSES)
  }
  // getCourses(): Observable<Course[]> {
  //   return of(COURSES)
  // }

  constructor(private messagesService: MessagesService) { }

  // addMessage(): void {
  //   this.messagesService.add(str)
  // }

  // clearMessages(): void {
  //   this.messagesService.clear()
  // }

}
