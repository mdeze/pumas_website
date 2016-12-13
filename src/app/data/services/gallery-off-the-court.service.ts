import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GalleryItem } from '../content/gallery/GalleryItem';
//import { GALLERY_OFF_THE_COURT_2016 } from '../content/gallery/off-the-court/gallery-off-the-court-2016.data';

@Injectable()
export class GalleryOffTheCourtService {
    constructor(private http: Http) {}

    getGalleryOffTheCourtByYear(year: number): Promise<GalleryItem[]> {
        let galleryURL: string;

        switch (year) {
            case 2016:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2016.data.json';
                break;
            default:
                galleryURL = '/assets/content/gallery/off-the-court/gallery-off-the-court-2016.data.json';
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
