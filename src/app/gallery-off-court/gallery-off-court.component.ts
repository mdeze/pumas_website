import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

declare var FancyBox:any;

import { GalleryItem } from '../data/content/gallery/GalleryItem';
import { GalleryOffTheCourtService } from '../data/services/gallery-off-the-court.service';

@Component({
  selector: 'app-gallery-off-court',
  templateUrl: './gallery-off-court.component.html',
  styleUrls: ['./gallery-off-court.component.css'],
  providers: [GalleryOffTheCourtService]
})
export class GalleryOffCourtComponent implements OnInit, AfterViewInit {

  galleryYear: number = 2016;
  galleryList: GalleryItem[][];

  constructor(
      private galleryService: GalleryOffTheCourtService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.galleryYear = +params['year'];
        this.galleryList = this.getGalleryOTCByYear(this.galleryYear);
      });
  }

  ngAfterViewInit() {
    FancyBox.initFancybox();
  }

  getGalleryOTCByYear(year: number): GalleryItem[][] {
    let galleryData: GalleryItem[][] = [];

    let rowItems: number = 4;
    let startItem: number = 0;
    let endItem: number = rowItems;

    let galleryList = this.galleryService.getGalleryOffTheCourtByYear(year);
    let itemsRemaining: number = galleryList.length;

    for (let i: number = 0; i < galleryList.length; i++) {

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

    return galleryData;
  }

}
