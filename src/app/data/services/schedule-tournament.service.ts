import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var moment: any;

import { TournamentItem } from '../content/schedule/TournamentItem';

@Injectable()
export class TournamentScheduleService {
    TournamentURL: string = '/assets/content/schedule/tournament-2017.data.json?nocache=' + (new Date()).getTime();

    constructor(private http: Http) {}

    getTournamentSchedule(): Promise<TournamentItem[]> {
        return this.http.get(this.TournamentURL)
             .toPromise()
             .then(function(data){
                return data.json().data as TournamentItem[];
             })
             .catch(this.handleError);
    }

    getNextTournaments(count: number): Promise<TournamentItem[]> {
        return this.http.get(this.TournamentURL)
             .toPromise()
             .then(function(data){
                let tournaments: TournamentItem[] = data.json().data as TournamentItem[];
                let nextTournaments: TournamentItem[] = [];
                let nextNumber = 0;
                for (let i = 0; i < tournaments.length; i++) {
                    if (moment(tournaments[i].date).isSameOrAfter(moment())) {
                        nextTournaments[nextNumber] = tournaments[i];
                        nextNumber++;
                        count--;
                        if (count === 0) {
                            break;
                        }
                    }
                }
                return nextTournaments;
             })
             .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
