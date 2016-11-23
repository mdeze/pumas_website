import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-coaches-interested',
  templateUrl: './coaches-interested.component.html',
  styleUrls: ['./coaches-interested.component.css']
})
export class CoachesInterestedComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // collapse panels after load - required for gmaps render
    setTimeout(
      $('.panel-collapse').each(function(){
          if ($(this).hasClass('in')) {
              $(this).collapse('toggle');
          }
      })
    , 500);

    // enable toggle caret on panel expand
    $('.accordion-toggle').on('click', function() {
      let $icon = $(this).find('i');
      if ($icon.hasClass('fa-caret-right')) {
        $icon.removeClass('fa-caret-right').addClass('fa-caret-down');
      } else {
        $icon.addClass('fa-caret-right').removeClass('fa-caret-down');
      }
    });
  }

}
