import { Injectable } from '@angular/core';

import { GalleryItem } from '../content/gallery/GalleryItem';
import { GALLERY_OFF_THE_COURT_2016 } from '../content/gallery/off-the-court/gallery-off-the-court-2016.data';

@Injectable()
export class GalleryOffTheCourtService {

    getGalleryOffTheCourtByYear(year: number): GalleryItem[] {
        switch (year) {
            case 2016:
                return GALLERY_OFF_THE_COURT_2016;
            default:
                let gallery: GalleryItem[] = [];
                return gallery;
        }

    }
}
