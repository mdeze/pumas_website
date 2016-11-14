import { Component, OnInit } from '@angular/core';

import { TournamentItem } from '../schedule-tournament/TournamentItem';
import { TournamentScheduleService } from '../data/services/schedule-tournament.service';

@Component({
  selector: 'app-schedule-next',
  templateUrl: './schedule-next.component.html',
  styleUrls: ['./schedule-next.component.css'],
  providers: [TournamentScheduleService]
})
export class ScheduleNextComponent implements OnInit {
  tournamentItems: TournamentItem[]

  constructor(private tournamentService: TournamentScheduleService) { }

  ngOnInit() {
    this.tournamentItems = this.tournamentService.getNextTournaments(4);
  }

}
