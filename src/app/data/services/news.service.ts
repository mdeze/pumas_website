import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var moment: any;

import { NewsItem } from '../content/news/NewsItem';

@Injectable()
export class NewsService {
    NewsItemList: NewsItem[] = [];
    error: Object;

    constructor(private http: Http) {}

    getNews(): Promise<NewsItem[]> {
        return this.http.get('/assets/content/news/news.data.json')
             .toPromise()
             .then(function(data){
                let NewsItemList: NewsItem[] = data.json().data as NewsItem[];
                for (let i = 0; i < NewsItemList.length; i++) {
                    NewsItemList[i].postedOnDisplay = moment(NewsItemList[i].postedOn).format('ddd MMMM Do, YYYY');
                }
                return NewsItemList;
             })
             .catch(this.handleError);
    }

    getNewsItems(count: number): Promise<NewsItem[]> {
        return this.http.get('/assets/content/news/news.data.json')
            .toPromise()
            .then(function(data){
                let NewsItemList: NewsItem[] = data.json().data.slice(0, count) as NewsItem[];
                for (let i = 0; i < NewsItemList.length; i++) {
                    NewsItemList[i].postedOnDisplay = moment(NewsItemList[i].postedOn).format('ddd MMMM Do, YYYY');
                }
                return NewsItemList;
            })
            .catch(this.handleError);
    }

    getAnnouncementItems(): Promise<NewsItem[]> {
        return this.http.get('/assets/content/news/news.data.json')
            .toPromise()
            .then(function(data){
                let newsItems: NewsItem[] = [];
                let newsList: NewsItem[] = data.json().data.slice(0, 4) as NewsItem[];

                let annoucement = 0;
                for (let i = 0; i < newsList.length; i++) {
                    if (moment(newsList[i].endAnnouncement).isAfter(moment())) {
                        newsList[i].postedOnDisplay = moment(newsList[i].postedOn).format('ddd MMMM Do, YYYY');
                        newsItems[annoucement] = newsList[i];
                        annoucement++;
                    }
                }
                return newsItems;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
