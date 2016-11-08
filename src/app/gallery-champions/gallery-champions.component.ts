import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

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

  constructor(
      private galleryService: GalleryChampionService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.galleryYear = +params['year'];
        this.galleryList = this.getGalleryChampionByYear(this.galleryYear);
      });
  }

  ngAfterViewInit() {
    FancyBox.initFancybox();
  }

  getGalleryChampionByYear(year: number): GalleryItem[][] {
    let galleryData: GalleryItem[][] = [];

    let rowItems: number = 4;
    let startItem: number = 0;
    let endItem: number = rowItems;

    let galleryList = this.galleryService.getGalleryChampionByYear(year);
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
