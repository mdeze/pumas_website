import { Injectable } from '@angular/core';

import { GalleryItem } from '../../gallery-champions/GalleryItem';
import { GALLERY_CHAMPIONS_2016 } from '../content/gallery/champion/gallery-champion-2016.data';

@Injectable()
export class GalleryChampionService {

    getGalleryChampionByYear(): GalleryItem[] {
        return GALLERY_CHAMPIONS_2016;
    }
}
