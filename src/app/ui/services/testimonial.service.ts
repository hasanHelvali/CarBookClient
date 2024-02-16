import { HttpClient } from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { About } from '../models/about';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class a {
  constructor(private httpClient:HttpClient,@Inject("baseUrl")private baseUrl:string) { 

  }
  getAboutInfo():Observable<any>{
    return this.httpClient.get(this.baseUrl+"/abouts");  
  }

  postAboutInfo(aboutData:About):Observable<any>{
    return this.httpClient.post(this.baseUrl+"/abouts",aboutData);  
  }

  udpateAboutInfo(aboutData:About):Observable<any>{
    return this.httpClient.put(this.baseUrl+"/abouts",aboutData);  
  }
  deleteAboutInfo(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/abouts/"+`${id}`);  
  }

}
