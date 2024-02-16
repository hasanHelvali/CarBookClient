import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { CustomHttpClient } from '../../services/customHttpClient.service';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  allTestimonials:Testimonial[];
  constructor(private httpClientService:CustomHttpClient, @Inject("baseUrl")private baseUrl:string) {
    this.getTestimonial();
  }
  

  getTestimonial(){
    this.httpClientService.get<Testimonial>({controller:"testimonials"}).subscribe({
      next:data=>{
        this.allTestimonials=data;
      },
      error:err=>{
        
      }
    })
  }
  getTestimonialById(testimonialID:string){
    this.httpClientService.get<Testimonial>({controller:"testimonials"},testimonialID).subscribe({
      next:data=>{
        this.allTestimonials=data;
      },
      error:err=>{
        
      }
    })
  }

  createTestimonial(testimonial:Testimonial){
    this.httpClientService.post<Testimonial>({controller:"testimonials"},testimonial).subscribe({
      next:data=>{
      },
      error:err=>{
        
      }
    })
  }
  updateTestimonial(testimonial:Testimonial){
    this.httpClientService.put<Testimonial>({controller:"testimonials"},testimonial).subscribe({
      next:data=>{
      },
      error:err=>{
        
      }
    })
  }
  deleteTestimonial(testimonialID:string){
    this.httpClientService.delete<Testimonial>({controller:"testimonials"},testimonialID).subscribe({
      next:data=>{
      },
      error:err=>{
        
      }
    })
  }

}
