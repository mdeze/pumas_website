import { Component, OnInit } from '@angular/core';

import { NewsItem } from './NewsItem';
import { NewsService } from '../data/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsItems = this.newsService.getNews();
  }

}
