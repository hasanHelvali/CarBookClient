import { Component, OnInit } from '@angular/core';
import { CustomHttpClient } from '../services/customHttpClient.service';
import { Category } from '../models/category';
import { Last3BlogsWithAuthors } from '../models/last3BlogsWithAuthors';
import { TagCloud } from '../models/tag-cloud';
import { Blog } from '../models/blog';
import { ActivatedRoute } from '@angular/router';
import { GetAuthorByBlogId } from '../models/getAuthorByBlogId';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

  allLast3BlogsWithAuthors:Last3BlogsWithAuthors[]=[];
  allTagClouds:TagCloud[]=[];
  allBlog:Blog[]=[];
  blog:Blog;
  blogId:string;
  authorId:string;
  getBlogByAuthor:GetAuthorByBlogId[]=[];
  img:string;
  comments:Comment[]=[];
  constructor(private httpClientService:CustomHttpClient,private route:ActivatedRoute) {
       this.route.params.subscribe({
      next:(data)=>{
        const _id = data['id'];
        this.blogId=_id;
        this.getBlogById(this.blogId);
      },
      error:(err)=>{
      }
    })
   this.getBlogCategories();
   this.getAllRecentBlog(); 
   this.getTagCloudsByBlogId(); 
   this.getAboutAuthor(); 
   this.getAllComment(); 
  }
  async ngOnInit() {

    }


  allCategories:Category[];
  getBlogCategories(){
    this.httpClientService.get<Category>({controller:"categories"}).subscribe({
      next:(data)=>{
        this.allCategories=data;
      },
      error:(err)=>{

      }
    })
  }

  getAllRecentBlog(){
    this.httpClientService.get<Last3BlogsWithAuthors>({controller:"blogs",action:"GetLast3BlogsWithAuthorsList"}).subscribe({
      next:(data)=>{
        this.allLast3BlogsWithAuthors=data;
      },
      error:(err)=>{
      }
    });
  }

  getTagCloudsByBlogId(){
    this.httpClientService.get<TagCloud>({controller:"TagClouds",action:"GetTagCloudByBlogIdList"},this.blogId).subscribe({
      next:(data)=>{
        console.log(this.blogId);
        this.allTagClouds=data;
      },
      error:(err)=>{

      }
    })
  }

  getBlogById(id:any){
    this.httpClientService.get<Blog>({controller:"blogs"},id).subscribe({
      next:(data)=>{
        this.allBlog=data
        console.log(this.allBlog);
        this.img=this.allBlog['coverImageUrl'];
        console.log(this.img);
        this.authorId=this.allBlog[0]?.authorID.toString()
      },
      error:(err)=>{

      }
    })
  }
  getAboutAuthor(){
    this.httpClientService.get<GetAuthorByBlogId>({controller:"blogs",action:"GetBlogByAuthorIdList"},this.blogId).subscribe({
      next:(data)=>{
        this.getBlogByAuthor=data
      },
      error:(err)=>{
      }
    })
  }

  getAllComment(){
    this.httpClientService.get<Comment>({controller:"comments"}).subscribe({
      next:(data)=>{
        this.comments=data
      },
      error:(err)=>{
      }
    })
  }
}
