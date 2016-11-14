import { Injectable } from '@angular/core';
declare var moment: any;

import { TournamentItem } from '../../schedule-tournament/TournamentItem';
import { TOURNAMENTS_2017 } from '../content/schedule/tournament-2017.data';

@Injectable()
export class TournamentScheduleService {

    getTournamentSchedule(): TournamentItem[] {
        return TOURNAMENTS_2017;
    }

    getNextTournaments(count: number): TournamentItem[] {
        let nextTournaments: TournamentItem[] = [];
        let nextNumber = 0;
        for (let i = 0; i < TOURNAMENTS_2017.length; i++) {
            if (moment(TOURNAMENTS_2017[i].date).isSameOrAfter(moment())){
                nextTournaments[nextNumber] = TOURNAMENTS_2017[i];
                nextNumber++;
                count--;
                if (count === 0){
                    break;
                }
            }
        }
        return nextTournaments;
    }
}
