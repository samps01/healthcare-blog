import { Injectable } from '@angular/core';
import {BaseRequestService} from './base-request.service';

@Injectable({
  providedIn: 'root'
})


export class BlogService {
  public englishBlogs: any[] = [];
  public esBlogs: any[] = [];
  public bothBlogs: any[] = [];
  constructor(private baseRequestService: BaseRequestService) {
    this.getBlogPost();
  }

  public getBlogPost() {
    this.baseRequestService.baseGetRequest('https://www.healthcare.gov/api/blog.json').subscribe(res => {
      this.bothBlogs = res['blog'];
      this.bothBlogs.forEach(blog => {
        if(blog.lang === 'en') {
          this.englishBlogs.push(blog);
        } else if (blog.lang === 'es') {
          this.esBlogs.push(blog);
        }
      });
    });
  }
}
