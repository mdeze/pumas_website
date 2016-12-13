import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var moment: any;

import { TournamentItem } from '../content/schedule/TournamentItem';

@Injectable()
export class TournamentScheduleService {
    constructor(private http: Http) {}

    getTournamentSchedule(): Promise<TournamentItem[]> {
        return this.http.get('/assets/content/schedule/tournament-2017.data.json')
             .toPromise()
             .then(function(data){
                return data.json().data as TournamentItem[];
             })
             .catch(this.handleError);
    }

    getNextTournaments(count: number): Promise<TournamentItem[]> {
        console.log('fetching next tournament data: ' + count);
        return this.http.get('/assets/content/schedule/tournament-2017.data.json')
             .toPromise()
             .then(function(data){
                let tournaments: TournamentItem[] = data.json().data as TournamentItem[];
                let nextTournaments: TournamentItem[] = [];
                let nextNumber = 0;
                for (let i = 0; i < tournaments.length; i++) {
                    console.log(moment(tournaments[i].date));
                    if (moment(tournaments[i].date).isSameOrAfter(moment())) {
                        nextTournaments[nextNumber] = tournaments[i];
                        console.log("added " + nextNumber);
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
