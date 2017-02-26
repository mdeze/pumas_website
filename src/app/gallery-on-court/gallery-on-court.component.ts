import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

declare var FancyBox:any;

import { GalleryItem } from '../data/content/gallery/GalleryItem';
import { GalleryOnTheCourtService } from '../data/services/gallery-on-the-court.service';

@Component({
  selector: 'app-gallery-on-court',
  templateUrl: './gallery-on-court.component.html',
  styleUrls: ['./gallery-on-court.component.css'],
  providers: [GalleryOnTheCourtService]
})
export class GalleryOnCourtComponent implements OnInit, AfterViewInit {
  galleryYear: number = 2016;
  otcGalleryList: GalleryItem[][];

  constructor(
      private galleryService: GalleryOnTheCourtService,
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

    return this.galleryService.getGalleryOnTheCourtByYear(year).then(function(data){
      let rowItems: number = 4;
      let startItem: number = 0;
      let endItem: number = rowItems;

      let galleryList: GalleryItem[] = data;
      let galleryData: GalleryItem[][] = [];
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

      return Promise.resolve(galleryData);
    });

  }


}
