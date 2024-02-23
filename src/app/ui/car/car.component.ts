import { Component } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { CarsWithPricing } from '../models/car-with-pricing';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  /**
   *
   */

  allCarData:CarsWithPricing[];
  constructor(private httpClientService:CustomHttpClient) {
    this.getCarPricingWithCar();
  }


  getCarPricingWithCar(){
    this.httpClientService.get<CarsWithPricing>({controller:"carpricings"}).subscribe({
      next:(data)=>{
        this.allCarData=data;
      },
      error:err=>{
      }
    })
  }
  // getCarById(CarId:string){
  //   this.httpClientService.get<CarsWithPricing>({controller:"carpricings"},CarId).subscribe({
  //     next:(data)=>{
  //       console.log(data);
  //       this.allCarData=data;
  //     },
  //     error:err=>{
  //     }
  //   })
  // }
  
  // createCar(Car:CarsWithPricing){
  //   this.httpClientService.post({controller:"carpricings"},Car).subscribe({
  //     next:data=>{
  //     },
  //     error:err=>{
  //     }
  //   })
  // }
  
  // updateCar(Car:CarsWithPricing){
  //   this.httpClientService.post({controller:"carpricings"},Car).subscribe({
  //     next:data=>{
  //     },
  //     error:err=>{
  //     } 
  //   })
  // }
  
  // deleteCar(CarId:string){
  //   this.httpClientService.delete({controller:"cars",action:"getcarwithbrand"},CarId).subscribe({
  //     next:data=>{
  //     },
  //     error:err=>{
  //     }
  //   })
  // }
}
