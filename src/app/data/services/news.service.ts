import { Injectable } from '@angular/core';
declare var moment: any;

import { NewsItem } from '../content/news/NewsItem';
import { NEWS_ITEM_LIST } from '../content/news/news.data';

@Injectable()
export class NewsService {

    getNews(): NewsItem[] {
        for (let i = 0; i < NEWS_ITEM_LIST.length; i++) {
            NEWS_ITEM_LIST[i].postedOnDisplay = moment(NEWS_ITEM_LIST[i].postedOn)
                                                    .format('ddd MMMM Do, YYYY');
        }
        return NEWS_ITEM_LIST;
    }

    getNewsItems(count: number): NewsItem[] {
        return this.getNews().slice(0, count);
    }

    getAnnouncementItems(): NewsItem[] {
        let newsItems: NewsItem[] = [];

        let newsList = this.getNewsItems(4);

        let annoucement = 0;
        for (let i = 0; i < newsList.length; i++) {
            if (moment(newsList[i].endAnnouncement).isAfter(moment())) {
                newsItems[annoucement] = newsList[i];
                annoucement++;
            }
        }

        return newsItems;
    }
}
