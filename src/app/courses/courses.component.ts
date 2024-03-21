import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[] 
  searchText:string=''
  activateRoute:ActivatedRoute=inject(ActivatedRoute)

  ngOnInit(){
    this.activateRoute.queryParamMap.subscribe((data)=>{
      this.searchText=data.get('search')

      if(this.searchText===''||this.searchText===undefined||
        this.searchText===null){
          this.AllCourses=this.coursesService.courses
        }
        else{
          this.AllCourses=this.coursesService.courses
            .filter(course=>course.title.toLowerCase()
            .includes(this.searchText.toLowerCase()))
        }
    })
    
  }
}
