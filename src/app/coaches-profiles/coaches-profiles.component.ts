import { Component, OnInit, AfterViewInit  } from '@angular/core';

import { ProfileItem } from '../data/content/profile/ProfileItem';

@Component({
  selector: 'app-coaches-profiles',
  templateUrl: './coaches-profiles.component.html',
  styleUrls: ['./coaches-profiles.component.css']
})
export class CoachesProfilesComponent implements OnInit, AfterViewInit  {
  profileID = '1620';
  profileList: ProfileItem[] = [];
  profile: ProfileItem;

  constructor() { }

  ngOnInit() {
    this.loadProfiles();
  }

  ngAfterViewInit() {

  }

  showModal(profileNumber) {
    for (const profile of this.profileList){
      if (profile.id === profileNumber) {
        this.profile = profile;
      }
    }
  }

  loadProfiles() {
    // this.profileList[0] = new ProfileItem(49, 'Mike', 'Ezekiel', '/assets/img/coaches/mike-ezekiel.jpg', 'Head Coach');
    // this.profileList[1] = new ProfileItem(16, 'Lizzy', 'Ezekiel', '/assets/img/coaches/lizzy-ezekiel.jpg', 'Asst Coach');
    // this.profileList[2] = new ProfileItem(20, 'Jordan', 'Ezekiel', '/assets/img/coach.png', 'Asst Coach');
    // this.profileList[3] = new ProfileItem(50, 'Denise', 'Ezekiel', '/assets/img/coach.png', 'Asst Coach');

    this.profileList[0] = new ProfileItem(1, 'Stephen', 'Boyle', '/assets/img/coach.png', 'Asst Coach');
    this.profileList[1] = new ProfileItem(2, 'Bruce', 'Shainwald', '/assets/img/coach.png', 'Head Coach');
    this.profileList[2] = new ProfileItem(3, 'Brian', 'Healy', '/assets/img/coach.png', 'Head Coach');
    this.profileList[3] = new ProfileItem(4, 'Dan', 'OConnor', '/assets/img/coach.png', 'Head Coach');
    this.profileList[4] = new ProfileItem(5, 'Steve', 'McRoy', '/assets/img/coach.png', 'Head Coach');
    this.profileList[5] = new ProfileItem(6, 'Bonnie', 'Zeigler', '/assets/img/coach.png', 'Asst Coach');
  }

}
