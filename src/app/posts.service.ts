import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
url="http://jsonplaceholder.typicode.com/posts"
 //url ="https://tacotest1.azurewebsites.net/api/HttpTriggerRegisterUser?"
  constructor(private http:HttpClient){ }
  getPosts()
  {
    return this.http.get(this.url);
  }
}
