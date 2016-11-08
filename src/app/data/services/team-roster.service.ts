import { Injectable } from '@angular/core';

import { TeamRoster } from '../../team-roster/TeamRoster';

import { TEAM_ROSTER_2016 } from '../content/rosters/team-roster-2016.data';
import { TEAM_ROSTER_2015 } from '../content/rosters/team-roster-2015.data';
import { TEAM_ROSTER_2014 } from '../content/rosters/team-roster-2014.data';

@Injectable()
export class TeamRosterService {

    getRosterByYear(year: number): TeamRoster[] {
        switch (year) {
            case 2016:
                return TEAM_ROSTER_2016;
            case 2015:
                return TEAM_ROSTER_2015;
            case 2014:
                return TEAM_ROSTER_2014;
            default:
                let teamList: TeamRoster[] = [];
                return teamList;
        }
    }
}
