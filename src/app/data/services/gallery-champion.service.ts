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
            case 2016:
                galleryURL = '/assets/content/gallery/champion/gallery-champion-2016.data.json';
                break;
            case 2015:
                galleryURL = '/assets/content/gallery/champion/gallery-champion-2015.data.json';
                break;
            default:
                galleryURL = '/assets/content/gallery/champion/gallery-champion-2016.data.json';
                break;
        }

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
