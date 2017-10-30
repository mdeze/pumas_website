import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ProfileItem } from '../content/profile/ProfileItem';
import { ExperienceItem } from '../content/profile/ExperienceItem';

@Injectable()
export class CoachesBioService {

  constructor(private http: Http) {}

  getAllProfiles(): Promise<ProfileItem[]> {
    const biosURL = '/assets/content/coach-bios/bios.data.json';
    return this.http.get(biosURL)
      .toPromise()
      .then(function(data){
          return data.json().data as ProfileItem[];
      })
      .catch(this.handleError);
  }

  getProfileById(id: number): Promise<ProfileItem> {
    const biosURL = '/assets/content/coach-bios/bios.data.json';
    return this.http.get(biosURL)
      .toPromise()
      .then(function(data){
        const profileList = data.json().data as ProfileItem[];
        let coachProfile: ProfileItem;

        for (const profile of profileList){
          if (profile.id == id) {
            coachProfile = profile;
          }
        }
        return coachProfile;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
