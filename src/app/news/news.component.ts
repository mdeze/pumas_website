import { Component, OnInit } from '@angular/core';

import { NewsItem } from '../data/content/news/NewsItem';
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
    this.newsService.getNews().then(news => this.newsItems = news);
  }

}
