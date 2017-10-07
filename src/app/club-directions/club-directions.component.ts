import { Component, OnInit, AfterViewInit  } from '@angular/core';

import { DirectionItem } from '../data//content/directions/DirectionItem';
import { DirectionService } from '../data/services//direction.service';
declare var $:any;

@Component({
  selector: 'app-club-directions',
  templateUrl: './club-directions.component.html',
  styleUrls: ['./club-directions.component.css'],
  providers: [DirectionService]
})
export class ClubDirectionsComponent implements OnInit, AfterViewInit {
  directionItems: DirectionItem[];
  disableDefaultUI: false;

  constructor(private directionService: DirectionService) {}

  ngOnInit() {
    this.directionService.getDirections().then(directions => this.directionItems = directions);
  }

  ngAfterViewInit(){
    // collapse panels after load - required for gmaps render
    setTimeout(() => {
      $('.panel-collapse').each(function(){
          if ($(this).hasClass('in')) {
              $(this).collapse('toggle');
          }
      });
    }, 750);

    // enable toggle caret on panel expand
    $('.accordion-toggle').on('click', function() {
      const $icon = $(this).find('i');
      if ($icon.hasClass('fa-caret-right')) {
        $icon.removeClass('fa-caret-right').addClass('fa-caret-down');
      } else {
        $icon.addClass('fa-caret-right').removeClass('fa-caret-down');
      }
    });
  }

}
