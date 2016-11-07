import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var FancyBox:any;

import { GalleryItem } from './GalleryItem';
import { GalleryChampionService } from '../data/services/gallery-champion.service';

@Component({
  selector: 'app-gallery-champions',
  templateUrl: './gallery-champions.component.html',
  styleUrls: ['./gallery-champions.component.css'],
  providers: [GalleryChampionService]
})
export class GalleryChampionsComponent implements OnInit, AfterViewInit {

  galleryYear: number = 2016;
  galleryList: GalleryItem[][];

  constructor(private galleryService: GalleryChampionService) { }

  ngOnInit() {
    this.galleryList = this.getGalleryChampionByYear();
  }

  ngAfterViewInit() {
    FancyBox.initFancybox();
  }

  getGalleryChampionByYear(): GalleryItem[][] {
    let galleryData: GalleryItem[][] = [];

    let rowItems: number = 4;
    let startItem: number = 0;
    let endItem: number = rowItems;

    let galleryList = this.galleryService.getGalleryChampionByYear();
    let itemsRemaining: number = galleryList.length;

    for (let i: number = 0; i < galleryList.length; i++) {

      let row: GalleryItem[];
      if (itemsRemaining >= rowItems) {
        row = galleryList.slice(startItem, endItem);
      } else {
       row = galleryList.slice(startItem);
      }
      galleryData[i] = row;

      startItem = endItem;
      endItem = endItem + rowItems;
      itemsRemaining = (galleryList.length - endItem);

      if (endItem > galleryList.length) {
        break;
      }
    }

    return galleryData;
  }

}
