import { Component } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { Router } from '@angular/router';
import { Banner } from '../models/Banner';
import { Last5CarsWithBrand } from '../models/last5CarsWithBrand';
import { About } from '../models/about';
import { Servis } from '../models/servis';
import { Testimonial } from '../models/testimonial';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private httpClientService:CustomHttpClient,private router:Router) {
    this.getBanner();
    this.getLast5CarsWithBrand();
    this.getAbout();
    this.getService();
    this.getTestimonial();
  }

  allBannersData:Banner[];
  last5CarsWithBrand:Last5CarsWithBrand[];
  allAboutData:About[];
  allServices:Servis[];
  allTestimonialsData:Testimonial[];
  getBanner(){
    this.httpClientService.get<Banner>({controller:"banners"}).subscribe({
      next:(data)=>{
        this.allBannersData=data;
      },
      error:err=>{
      }
    })
  }

  getLast5CarsWithBrand(){
    this.httpClientService.get<Last5CarsWithBrand>({controller:"cars",action:"GetLast5CarsWithBrand"}).subscribe({
      next:(data)=>{
        this.last5CarsWithBrand=data;
      },
      error:err=>{
      }
    })
  }
  getAbout(){
    this.httpClientService.get<About>({controller:"abouts"}).subscribe({
      next:(data)=>{
        this.allAboutData=data;
      },
      error:err=>{
      }
    })
  }

  getService(){
    this.httpClientService.get<Servis>({controller:"services"}).subscribe({
      next:(data)=>{
        this.allServices=data;
      },
      error:err=>{
      }
    })
  }

  getTestimonial(){
    this.httpClientService.get<Testimonial>({controller:"testimonials"}).subscribe({
      next:(data)=>{
        this.allTestimonialsData=data;
      },
      error:err=>{
      }
    })
  }

  getBannerById(BannerId:string){
    this.httpClientService.get<Banner>({controller:"banners"},BannerId).subscribe({
      next:(data)=>{
        console.log(data);
        this.allBannersData=data;
      },
      error:err=>{
      }
    })
  }
  
  createBanner(banner:Banner){
    this.httpClientService.post({controller:"banners"},banner).subscribe({
      next:(data)=>{
        this.router.navigate(['/default'])
      },
      error:(err)=>{
      }
    })
  }
  
  updateBanner(Banner:Banner){
    this.httpClientService.post({controller:"banners"},Banner).subscribe({
      next:data=>{
      },
      error:err=>{
      } 
    })
  }
  
  deleteBanner(BannerId:string){
    this.httpClientService.delete({controller:"banners"},BannerId).subscribe({
      next:data=>{
      },
      error:err=>{
      }
    })
  }
}
