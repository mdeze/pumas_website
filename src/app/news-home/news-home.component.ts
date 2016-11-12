import { Component, OnInit } from '@angular/core';

import { NewsItem } from '../news//NewsItem';
import { NewsService } from '../data/services/news.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css'],
  providers: [NewsService]
})
export class NewsHomeComponent implements OnInit {
  newsItems: NewsItem[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsItems = this.newsService.getNewsItems(2);
  }

}
