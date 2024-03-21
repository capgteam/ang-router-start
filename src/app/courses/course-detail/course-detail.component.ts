import { Component, OnInit, inject,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy{

  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  courseService:CourseService=inject(CourseService)

  courses:Course[]=this.courseService.courses
  selectedCourse:Course
  courseId:number

  paramPamRef
  


  ngOnInit(): void {
   
   // this.courseId= +this.activeRoute.snapshot.paramMap.get('id')

   // this.activeRoute.params.subscribe((data)=>{
    this.paramPamRef=  this.activeRoute.paramMap.subscribe((data)=>{
      //this.courseId=+data['id']
      this.courseId=+data.get('id')
      this.selectedCourse=this.courses.find(course=>course.id===this.courseId)
      console.log(this.selectedCourse)
    })

   

    //console.log(this.activeRoute.snapshot.paramMap.get('id'))
 
    //console.log(this.activeRoute.snapshot.params['id'])
  }


  ngOnDestroy(): void {
    this.paramPamRef=undefined
  }

}
