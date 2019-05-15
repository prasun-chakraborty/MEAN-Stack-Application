import { Injectable } from '@angular/core';
import {  } from 'rxjs';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  constructor(private http: HttpClient) { }
  getPosts() {
    this.http.get<{message: string, posts: Post []}>('http://localhost:3000/api/post')
    .subscribe((response) => {
      this.posts = response.posts;
      console.log(this.posts);
    },
     (error) => {
       console.log(error);
     });
    return this.posts;
  }
  addPosts(id: string, title: string, content: string) {
    const post: Post = {id, title, content};
    this.http.post<{message: string}>('http://localhost:3000/api/post', post)
    .subscribe((response) => {
      this.posts.push(post);
    }, (error) => {
      console.log(error);
    });

  }
}
