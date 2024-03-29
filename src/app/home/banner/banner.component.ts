import { Component,inject } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  router: Router=inject(Router)

  searchByCourseName(value:string){
    this.router.navigate(['/Courses'],{queryParams:{search:value}})
    //console.log(value)
  }
}
