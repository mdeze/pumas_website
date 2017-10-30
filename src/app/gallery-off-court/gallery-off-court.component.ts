import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

declare var FancyBox: any;

import { GalleryItem } from '../data/content/gallery/GalleryItem';
import { GalleryOffTheCourtService } from '../data/services/gallery-off-the-court.service';

@Component({
  selector: 'app-gallery-off-court',
  templateUrl: './gallery-off-court.component.html',
  styleUrls: ['./gallery-off-court.component.css'],
  providers: [GalleryOffTheCourtService]
})
export class GalleryOffCourtComponent implements OnInit, AfterViewInit {

  galleryYear = 2016;
  otcGalleryList: GalleryItem[][];

  constructor(
      private galleryService: GalleryOffTheCourtService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.galleryYear = +params['year'];
        this.getGalleryOTCByYear(this.galleryYear).then(gallery => this.otcGalleryList = gallery);
      });
  }

  ngAfterViewInit() {
    FancyBox.initFancybox();
  }

  getGalleryOTCByYear(year: number): Promise<GalleryItem[][]> {

    return this.galleryService.getGalleryOffTheCourtByYear(year).then(function(data){
      const rowItems = 4;
      let startItem = 0;
      let endItem: number = rowItems;

      const galleryList: GalleryItem[] = data;
      const galleryData: GalleryItem[][] = [];
      let itemsRemaining: number = galleryList.length;

      for (let i = 0; i < galleryList.length; i++) {

        if (itemsRemaining < 0) {
          break;
        }

        let row: GalleryItem[];
        if (itemsRemaining >= rowItems) {
          row = galleryList.slice(startItem, endItem);
        } else {
        row = galleryList.slice(startItem);
        }
        galleryData[i] = row;

        startItem = endItem;
        endItem = endItem + rowItems;
        itemsRemaining = (galleryList.length - startItem);
      }

      return Promise.resolve(galleryData);
    });

  }

}
