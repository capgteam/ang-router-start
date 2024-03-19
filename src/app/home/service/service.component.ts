import { Component, inject } from '@angular/core';
import { ServicesService } from './../../Services/services.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  servicesService = inject(ServicesService);
  services: {title: string, image: string, description: string}[] = [];

  ngOnInit(){
      this.services = this.servicesService.services;
}
}
