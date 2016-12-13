import { Component, OnInit } from '@angular/core';

import { TournamentItem } from '../data/content/schedule/TournamentItem';
import { TournamentScheduleService } from '../data/services/schedule-tournament.service';

@Component({
  selector: 'app-schedule-tournament',
  templateUrl: './schedule-tournament.component.html',
  styleUrls: ['./schedule-tournament.component.css'],
  providers: [TournamentScheduleService]
})
export class ScheduleTournamentComponent implements OnInit {
  tournamentItems: TournamentItem[]

  constructor(private tournamentService: TournamentScheduleService) { }

  ngOnInit() {
    this.tournamentService.getTournamentSchedule().then(schedule => this.tournamentItems = schedule);
  }

}
