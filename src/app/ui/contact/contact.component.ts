import { Component } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { Contact } from '../models/contact';
import { FooterAddress } from '../models/footer-address';
import { Router } from '@angular/router';
import { DefaultComponent } from '../default/default.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  allContactsData:Contact[]=[];
  allFooterAddress:FooterAddress[]=[];
  constructor(private httpClientService:CustomHttpClient,private router:Router) {
    this.getContact();
  }

  getContact(){
    this.httpClientService.get<Contact>({controller:"contacts"}).subscribe({
      next:(data)=>{
        this.allContactsData=data;
      },
      error:err=>{
      }
    })
    this.httpClientService.get<FooterAddress>({controller:"footeraddresses"}).subscribe({
      next:(data)=>{
        this.allFooterAddress=data;
      },
      error:err=>{
      }
    })
  }
  getContactById(ContactId:string){
    this.httpClientService.get<Contact>({controller:"contacts"},ContactId).subscribe({
      next:(data)=>{
        console.log(data);
        this.allContactsData=data;
      },
      error:err=>{
      }
    })
  }
  
  createContact(contactName,contactEmail,contactSubject,contactMessage){
     const contact:Contact=new Contact();
    contact.name=contactName;
    contact.subject=contactSubject;
    contact.email=contactEmail;
    contact.message=contactMessage;
    contact.sendDate=new Date()
    this.httpClientService.post({controller:"contacts"},contact).subscribe({
      next:(data)=>{
        this.router.navigate(['/default'])
      },
      error:(err)=>{
      }
    })
  }
  
  updateContact(Contact:Contact){
    this.httpClientService.post({controller:"contacts"},Contact).subscribe({
      next:data=>{
      },
      error:err=>{
      } 
    })
  }
  
  deleteContact(ContactId:string){
    this.httpClientService.delete({controller:"contacts"},ContactId).subscribe({
      next:data=>{
      },
      error:err=>{
      }
    })
  }
}
