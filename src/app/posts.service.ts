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

  postPosts(){
    fetch(this.url, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
}
