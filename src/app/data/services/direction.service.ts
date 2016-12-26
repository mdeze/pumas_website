import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DirectionItem } from '../content/directions/DirectionItem';

@Injectable()
export class DirectionService {
    constructor(private http: Http) {}

    getDirections(): Promise<DirectionItem[]> {
        let directionURL: string = '/assets/content/directions/direction.data.json?nocache=' + (new Date()).getTime();

        return this.http.get(directionURL)
             .toPromise()
             .then(function(data){
                let directionsList: DirectionItem[] = [];
                let directions: DirectionItem[] = data.json().data as DirectionItem[];
                // convert values to Number from JSON string value
                for (let i = 0; i < directions.length; i++) {
                    directions[i].lat = Number(directions[i].lat);
                    directions[i].lng = Number(directions[i].lng);
                    directions[i].zoom = Number(directions[i].zoom);
                    directionsList[i] = directions[i];
                }
                return directionsList;
             })
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
