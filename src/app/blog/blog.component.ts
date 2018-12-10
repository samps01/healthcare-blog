import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public languageArr: string[] = ['English', 'Spanish', 'Both'];
  public selectedLang = '';
  public blogList: any[] = [];
  constructor(public blogService: BlogService) {
    this.blogList = this.blogService.englishBlogs;
  }

  ngOnInit() {
  }

  public getLanguage(lang) {
    if (lang === 'English') {
      this.blogList = this.blogService.englishBlogs;
    } else if (lang === 'Spanish') {
      this.blogList = this.blogService.esBlogs;
    } else if (lang === 'Both') {
      this.blogList = this.blogService.bothBlogs;
    }
  }
}
