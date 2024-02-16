import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { About } from '../models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  allAboutData:About[];

constructor(private httpClientService:CustomHttpClient) {
  this.getAbout(); 
  // this.getAboutById("2"); 
  // this.createAbout({description:"example description",imageUrl:"example imageUrl",title:"example title"})
  // this.updateAbout({aboutId:2,description:"example description",imageUrl:"example imageUrl",title:"example title"});
  //  this.deleteAbout("5");
  //Test İslemleri Basarılı Bir Sekilde Yapıldı.
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
getAboutById(aboutId:string){
  this.httpClientService.get<About>({controller:"abouts"},aboutId).subscribe({
    next:(data)=>{
      console.log(data);
      this.allAboutData=data;
    },
    error:err=>{
    }
  })
}

createAbout(about:About){
  this.httpClientService.post({controller:"abouts"},about).subscribe({
    next:data=>{
    },
    error:err=>{
    }
  })
}

updateAbout(about:About){
  this.httpClientService.post({controller:"abouts"},about).subscribe({
    next:data=>{
    },
    error:err=>{
    } 
  })
}

deleteAbout(aboutId:string){
  this.httpClientService.delete({controller:"abouts"},aboutId).subscribe({
    next:data=>{
    },
    error:err=>{
    }
  })
}
}
