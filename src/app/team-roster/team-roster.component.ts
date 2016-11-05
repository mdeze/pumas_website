import { Component, OnInit, AfterViewInit } from '@angular/core';

// declare var $:any;
// declare var jQuery:any;
declare var FancyBox:any;



import { TeamRoster } from './TeamRoster';
import { TeamRosterService } from '../data/services/team-roster.service';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  providers: [TeamRosterService]
})
export class TeamRosterComponent implements OnInit, AfterViewInit {

  year: number = 2016;
  teamList: TeamRoster[];

  constructor(private rosterService: TeamRosterService) { }

  ngOnInit() {
    this.teamList = this.rosterService.getRosterByYear();
  }

  ngAfterViewInit(){
    FancyBox.initFancybox();
  }

}
