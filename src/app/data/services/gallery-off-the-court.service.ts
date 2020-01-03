import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GalleryItem } from '../content/gallery/GalleryItem';

@Injectable()
export class GalleryOffTheCourtService {
    constructor(private http: Http) {}

    getGalleryOffTheCourtByYear(year: number): Promise<GalleryItem[]> {
        let galleryURL: string;

        switch (year) {
            case 2019:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2019.data.json';
                break;
            case 2018:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2018.data.json';
                break;
            case 2017:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2017.data.json';
                break;
            case 2016:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2016.data.json';
                break;
            default:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2016.data.json';
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
