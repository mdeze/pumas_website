import { Component, OnInit } from '@angular/core';

import { NewsItem } from '../news/NewsItem';
import { NewsService } from '../data/services/news.service';

@Component({
  selector: 'app-news-recent',
  templateUrl: './news-recent.component.html',
  styleUrls: ['./news-recent.component.css'],
  providers: [NewsService]
})
export class NewsRecentComponent implements OnInit {
  newsItems: NewsItem[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsItems = this.newsService.getNews();
  }

}
