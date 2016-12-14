import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

declare var FancyBox:any;

import { TeamRoster } from '../data/content/rosters/TeamRoster';
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

  constructor(
      private rosterService: TeamRosterService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.year = +params['year'];
        this.rosterService.getRosterByYear(this.year).then(roster => this.teamList = roster);
      });
  }

  ngAfterViewInit(){
    FancyBox.initFancybox();
  }

}
