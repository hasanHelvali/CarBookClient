import { Component } from '@angular/core';
import { CustomHttpClient } from '../../services/customHttpClient.service';
import { FooterAddress } from '../../models/footer-address';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  allFooterAddress:FooterAddress[]=[];
  getDate:number;
  constructor(private httpClientService:CustomHttpClient) {
    this.getFooterAddress();
    this.getDate=new Date().getFullYear();
  }

  getFooterAddress(){
    this.httpClientService.get<FooterAddress>({controller:"footerAddresses"}).subscribe({
      next:(data)=>{
        this.allFooterAddress=data;
      },
      error:err=>{
      }
    })
  }
  getFooterAddressById(FooterAddressId:string){
    this.httpClientService.get<FooterAddress>({controller:"footerAddresses"},FooterAddressId).subscribe({
      next:(data)=>{
        console.log(data);
        this.allFooterAddress=data;
      },
      error:err=>{
      }
    })
  }
  
  createFooterAddress(FooterAddress:FooterAddress){
    this.httpClientService.post({controller:"footerAddresses"},FooterAddress).subscribe({
      next:data=>{
      },
      error:err=>{
      }
    })
  }
  
  updateFooterAddress(FooterAddress:FooterAddress){
    this.httpClientService.post({controller:"footerAddresses"},FooterAddress).subscribe({
      next:data=>{
      },
      error:err=>{
      } 
    })
  }
  
  deleteFooterAddress(FooterAddressId:string){
    this.httpClientService.delete({controller:"footerAddresses"},FooterAddressId).subscribe({
      next:data=>{
      },
      error:err=>{
      }
    })
  }
}
