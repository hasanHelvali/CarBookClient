import { Component } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { CarWithBrand } from '../models/car-with-brand';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  /**
   *
   */

  allCarData:CarWithBrand[];
  constructor(private httpClientService:CustomHttpClient) {
    this.getCar();
  }


  getCar(){
    this.httpClientService.get<CarWithBrand>({controller:"cars/getcarwithbrand"}).subscribe({
      next:(data)=>{
        this.allCarData=data;
      },
      error:err=>{
      }
    })
  }
  getCarById(CarId:string){
    this.httpClientService.get<CarWithBrand>({controller:"cars/getcarwithbrand"},CarId).subscribe({
      next:(data)=>{
        console.log(data);
        this.allCarData=data;
      },
      error:err=>{
      }
    })
  }
  
  createCar(Car:CarWithBrand){
    this.httpClientService.post({controller:"cars/getcarwithbrand"},Car).subscribe({
      next:data=>{
      },
      error:err=>{
      }
    })
  }
  
  updateCar(Car:CarWithBrand){
    this.httpClientService.post({controller:"cars/getcarwithbrand"},Car).subscribe({
      next:data=>{
      },
      error:err=>{
      } 
    })
  }
  
  deleteCar(CarId:string){
    this.httpClientService.delete({controller:"cars",action:"getcarwithbrand"},CarId).subscribe({
      next:data=>{
      },
      error:err=>{
      }
    })
  }
}
