import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DirectionItem } from './DirectionItem';
import { DIRECTION_ITEM_LIST } from '../data/content/direction.data';

@Component({
  selector: 'app-club-directions',
  templateUrl: './club-directions.component.html',
  styleUrls: ['./club-directions.component.css']
})
export class ClubDirectionsComponent implements OnInit { // , AfterViewInit 
  directionItems: DirectionItem[];

  constructor() { }

  ngOnInit() {
    this.directionItems = DIRECTION_ITEM_LIST;
  }

  //ngAfterViewInit(){
    // $('.panel-collapse').each(function(){
    //     if ($(this).hasClass('in')) {
    //         $(this).collapse('toggle');
    //     }
    // });
  //}

}