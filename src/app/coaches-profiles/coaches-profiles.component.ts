import { Component, OnInit, AfterViewInit  } from '@angular/core';

import { ProfileItem } from '../data/content/profile/ProfileItem';
import { CoachesBioService } from '../data/services/coaches-bio.service';

@Component({
  selector: 'app-coaches-profiles',
  templateUrl: './coaches-profiles.component.html',
  styleUrls: ['./coaches-profiles.component.css'],
  providers: [CoachesBioService]
})
export class CoachesProfilesComponent implements OnInit, AfterViewInit  {
  profileList: ProfileItem[];
  profile: ProfileItem;

  constructor(private bioService: CoachesBioService) { }

  ngOnInit() {
    this.getCoachProfileData().then(profiles => this.profileList = profiles);
  }

  ngAfterViewInit() {

  }

  getCoachProfileData(): Promise<ProfileItem[]>  {
    return this.bioService.getAllProfiles().then(function(data){
      return Promise.resolve(data);
    });
  }

  showModal(profileNumber) {
    for (const profile of this.profileList){
      if (profile.id === profileNumber) {
        this.profile = profile;
      }
    }
  }

}
