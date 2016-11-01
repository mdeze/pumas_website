import { Injectable } from '@angular/core';

import { NewsItem } from '../../news/NewsItem';
import { NEWS_ITEM_LIST } from '../content/news.data';

@Injectable()
export class NewsService {

    getNews(): NewsItem[] {
        return NEWS_ITEM_LIST;
    }
}