import { Component } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { AllBlogsWithAuthors } from '../models/all-blogs-with-author';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  allBlogWithAuthor:AllBlogsWithAuthors[];
  constructor(private httpClientService:CustomHttpClient) {
    this.getAllBlogsWithAuthors();
  }

  getAllBlogsWithAuthors(){
    this.httpClientService.get<AllBlogsWithAuthors>({controller:"blogs",action:"GetAllBlogsWithAuthorsList"})
    .subscribe({
      next:(data)=>{
        this.allBlogWithAuthor=data
      },
      error:(err)=>{

      }
    })
  }

   blogDetail(id:number)
  {
    
  }
}
