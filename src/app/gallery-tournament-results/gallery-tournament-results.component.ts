import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var OwlCarousel:any;

import { GalleryItem } from '../data/content/gallery/GalleryItem';
import { GalleryChampionService } from '../data/services/gallery-champion.service';

@Component({
  selector: 'app-gallery-tournament-results',
  templateUrl: './gallery-tournament-results.component.html',
  styleUrls: ['./gallery-tournament-results.component.css'],
  providers: [GalleryChampionService]
})
export class GalleryTournamentResultsComponent implements OnInit, AfterViewInit {
  galleryYear: number = 2016;
  galleryList: GalleryItem[];

  constructor(private galleryService: GalleryChampionService) { }

  ngOnInit() {
    this.galleryList = this.galleryService.getGalleryChampionByYear(this.galleryYear);
  }

    ngAfterViewInit() {
    OwlCarousel.initOwlCarousel();
  }

}
