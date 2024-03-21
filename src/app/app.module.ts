import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseService } from './Services/course.service';
import { ServicesService } from './Services/services.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServiceComponent } from './home/service/service.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServiceComponent,
    TestimonyComponent,
    LoginComponent,
    NotFoundComponent,
    CoursesComponent,
    CourseDetailComponent,
    ContactComponent,
    CheckoutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule ,
    RoutingModule
  ],
  providers: [ServicesService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
