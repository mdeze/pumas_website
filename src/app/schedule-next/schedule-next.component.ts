import { Component, OnInit } from '@angular/core';

import { TournamentItem } from '../data/content/schedule/TournamentItem';
import { TournamentScheduleService } from '../data/services/schedule-tournament.service';

@Component({
  selector: 'app-schedule-next',
  templateUrl: './schedule-next.component.html',
  styleUrls: ['./schedule-next.component.css'],
  providers: [TournamentScheduleService]
})
export class ScheduleNextComponent implements OnInit {
  tournamentItems: TournamentItem[];

  constructor(private tournamentService: TournamentScheduleService) { }

  ngOnInit() {
    this.tournamentService.getNextTournaments(4).then(schedule => this.tournamentItems = schedule);
  }

}
