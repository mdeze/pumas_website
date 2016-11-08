import { Injectable } from '@angular/core';

import { GalleryItem } from '../../gallery-champions/GalleryItem';
import { GALLERY_CHAMPIONS_2016 } from '../content/gallery/champion/gallery-champion-2016.data';
import { GALLERY_CHAMPIONS_2015 } from '../content/gallery/champion/gallery-champion-2015.data';

@Injectable()
export class GalleryChampionService {

    getGalleryChampionByYear(year: number): GalleryItem[] {
        switch (year) {
            case 2016:
                return GALLERY_CHAMPIONS_2016;
            case 2015:
                return GALLERY_CHAMPIONS_2015;
            default:
                let gallery: GalleryItem[] = [];
                return gallery;
        }

    }
}
