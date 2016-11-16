import { Component, OnInit } from '@angular/core';

import { NewsItem } from '../news//NewsItem';
import { NewsService } from '../data/services/news.service';

@Component({
  selector: 'app-news-announcements',
  templateUrl: './news-announcements.component.html',
  styleUrls: ['./news-announcements.component.css'],
  providers: [NewsService]
})
export class NewsAnnouncementsComponent implements OnInit {
  newsItems: NewsItem[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsItems = this.newsService.getNewsItems(2);
  }

}
