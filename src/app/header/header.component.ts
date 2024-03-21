import { Component,inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  activateRoute:ActivatedRoute=inject(ActivatedRoute)

  ngOnInit(){
      this.activateRoute.fragment.subscribe((data)=>{
       // console.log(data)
       this.jumpIntoSection(data)
      })
  }

  jumpIntoSection(value:string){
    document.getElementById(value).scrollIntoView({behavior:'smooth'})
  }
}
