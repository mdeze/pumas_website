import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TeamRoster } from '../content/rosters/TeamRoster';

@Injectable()
export class TeamRosterService {
    constructor(private http: Http) {}

    getRosterByYear(year: number): Promise<TeamRoster[]> {
        let rosterURL: string;

        switch (year) {
            case 2017:
                rosterURL = '/assets/content/roster/team-roster-2017.data.json';
                break;
            default:
                rosterURL = '/assets/content/roster/team-roster-2017.data.json';
                break;
        }

        rosterURL = rosterURL + '?nocache=' + (new Date()).getTime();

        return this.http.get(rosterURL)
             .toPromise()
             .then(function(data){
                 return data.json().data as TeamRoster[];
             })
             .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
