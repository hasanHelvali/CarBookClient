import { Component, Inject } from '@angular/core';
import { Servis } from '../models/servis';
import { CustomHttpClient } from '../services/customHttpClient.service';

@Component({
  selector: 'app-servis',
  templateUrl: './servis.component.html',
  styleUrls: ['./servis.component.css']
})
export class ServisComponent {

  allservices:Servis[];
  constructor(private httpClientService:CustomHttpClient, @Inject("baseUrl")private baseUrl:string) {
    this.getServis(); 
  }
  

  getServis(){
    this.httpClientService.get<Servis>({controller:"services"}).subscribe({
      next:data=>{
        this.allservices=data;
      },
      error:err=>{
        
      }
    })
  }
  getServisById(servisID:string){
    this.httpClientService.get<Servis>({controller:"services"},servisID).subscribe({
      next:data=>{
        this.allservices=data;
      },
      error:err=>{
        
      }
    })
  }

  createServis(Servis:Servis){
    this.httpClientService.post<Servis>({controller:"services"},Servis).subscribe({
      next:data=>{
      },
      error:err=>{
        
      }
    })
  }
  updateServis(Servis:Servis){
    this.httpClientService.put<Servis>({controller:"services"},Servis).subscribe({
      next:data=>{
      },
      error:err=>{
        
      }
    })
  }
  deleteServis(ServisID:string){
    this.httpClientService.delete<Servis>({controller:"services"},ServisID).subscribe({
      next:data=>{
      },
      error:err=>{
        
      }
    })
  }
}
