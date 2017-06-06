import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GalleryItem } from '../content/gallery/GalleryItem';

@Injectable()
export class GalleryChampionService {
    constructor(private http: Http) {}

    getGalleryChampionByYear(year: number): Promise<GalleryItem[]> {
        let galleryURL: string;

        switch (year) {
            case 2017:
                galleryURL = '/assets/content/gallery/champion/gallery-champion-2017.data.json';
                break;
            default:
                galleryURL = '/assets/content/gallery/champion/gallery-champion-2016.data.json';
                break;
        }

        galleryURL =  galleryURL + '?nocache=' + (new Date()).getTime();

        return this.http.get(galleryURL)
             .toPromise()
             .then(function(data){
                 return data.json().data as GalleryItem[];
             })
             .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
