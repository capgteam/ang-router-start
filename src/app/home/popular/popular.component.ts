import { Component, inject } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router:Router= inject(Router)
  activateRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToUrl(){
    console.log('button clicked....')
    this.router.navigate(['/Courses'],{relativeTo:this.activateRoute})
   // this.router.navigateByUrl('/Courses')
  }
}