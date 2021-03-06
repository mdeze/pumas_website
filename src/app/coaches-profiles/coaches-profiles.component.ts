import { Component, OnInit, AfterViewInit  } from '@angular/core';

import { ProfileItem } from '../data/content/profile/ProfileItem';
import { CoachesBioService } from '../data/services/coaches-bio.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-coaches-profiles',
  templateUrl: './coaches-profiles.component.html',
  styleUrls: ['./coaches-profiles.component.css'],
  providers: [CoachesBioService]
})
export class CoachesProfilesComponent implements OnInit, AfterViewInit  {
  profileList: ProfileItem[][];
  profile: ProfileItem;

  constructor(private bioService: CoachesBioService) { }

  ngOnInit() {
    this.getCoachProfileData().then(profiles => this.profileList = profiles);
  }

  ngAfterViewInit() {

  }

  OLDgetCoachProfileData(): Promise<ProfileItem[]>  {
    return this.bioService.getAllProfiles().then(function(data){
      return Promise.resolve(data);
    });
  }

  getCoachProfileData(): Promise<ProfileItem[][]>  {
    return this.bioService.getAllProfiles().then(function(data){
      const rowItems = 4;
      let startItem = 0;
      let endItem: number = rowItems;

      const profileList: ProfileItem[] = data;
      const profileData: ProfileItem[][] = [];
      let itemsRemaining: number = profileList.length;

      for (let i = 0; i < profileList.length; i++) {

        if (itemsRemaining < 0) {
          break;
        }

        let row: ProfileItem[];
        if (itemsRemaining >= rowItems) {
          row = profileList.slice(startItem, endItem);
        } else {
          row = profileList.slice(startItem);
        }
        profileData[i] = row;

        startItem = endItem;
        endItem = endItem + rowItems;
        itemsRemaining = (profileList.length - startItem);
      }

      return Promise.resolve(profileData);
    });
  }

  showModal(profileNumber) {
    for (const profileGroup of this.profileList){
      for (const profile of profileGroup){
        if (profile.id === profileNumber) {
          this.profile = profile;

          const minYear = (new Date()).getFullYear() - 5;
          const experienceLastFiveYears = [];

          profile.experience.forEach((exp, index) => {
            if (exp.year >= minYear) {
              experienceLastFiveYears.push(exp);
            }
          });
          profile.experienceSummary = experienceLastFiveYears;
        }
      }
    }

    $('#bioModal').modal('show');
  }

}
