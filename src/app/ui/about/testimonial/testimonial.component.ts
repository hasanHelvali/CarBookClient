import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { CustomHttpClient } from '../../services/customHttpClient.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  /**
   *
   */
  constructor(private httpClientService:CustomHttpClient, @Inject("baseUrl")private baseUrl:string) {
    
  }

  getTestimonial(){
    // this.httpClient.get(this.baseUrl+"/testimonial")
  }

}
