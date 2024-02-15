import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './ui/blog/blog.component';
import { AboutComponent } from './ui/about/about.component';
import { BlogSingleComponent } from './ui/blog-single/blog-single.component';
import { CarComponent } from './ui/car/car.component';
import { CarSingleComponent } from './ui/car-single/car-single.component';
import { ContactComponent } from './ui/contact/contact.component';
import { IndexComponent } from './ui/index/index.component';
import { MainComponent } from './ui/main/main.component';
import { PricingComponent } from './ui/pricing/pricing.component';
import { ServisComponent } from './ui/servis/servis.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"blog",component:BlogComponent},
  {path:"blog-single",component:BlogSingleComponent},
  {path:"car",component:CarComponent},
  {path:"car-single",component:CarSingleComponent},
  {path:"contact",component:ContactComponent},
  {path:"index",component:IndexComponent},
  {path:"main",component:MainComponent},
  {path:"pricing",component:PricingComponent},
  {path:"servis",component:ServisComponent},
  {path:"about",component:AboutComponent},
  {path:"**",component:IndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
