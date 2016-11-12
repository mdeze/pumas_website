import { Injectable } from '@angular/core';
declare var moment: any;

import { NewsItem } from '../../news/NewsItem';
import { NEWS_ITEM_LIST } from '../content/news.data';

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
}
