import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog/blog.component';
import { CarSingleComponent } from './car-single/car-single.component';
import { CarComponent } from './car/car.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { UiComponent } from './ui.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ServisComponent } from './servis/servis.component';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from './about/testimonial/testimonial.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BlogSingleComponent,
    BlogComponent,
    CarSingleComponent,
    CarComponent,
    ContactComponent,
    PricingComponent,
    MainComponent,
    IndexComponent,
    UiComponent,
    ServisComponent,
    TestimonialComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[UiComponent]
})
export class UIModule { }
