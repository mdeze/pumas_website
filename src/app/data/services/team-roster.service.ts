import { Injectable } from '@angular/core';

import { TeamRoster } from '../../team-roster/TeamRoster';
import { TEAM_ROSTER_2016 } from '../content/rosters/team-roster-2016.data';

@Injectable()
export class TeamRosterService {

    getRosterByYear(): TeamRoster[] {
        return TEAM_ROSTER_2016;
    }
}
