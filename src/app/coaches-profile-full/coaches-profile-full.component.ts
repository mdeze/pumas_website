import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProfileItem } from '../data/content/profile/ProfileItem';
import { CoachesBioService } from '../data/services/coaches-bio.service';

@Component({
  selector: 'app-coaches-profile-full',
  templateUrl: './coaches-profile-full.component.html',
  styleUrls: ['./coaches-profile-full.component.css'],
  providers: [CoachesBioService]
})
export class CoachesProfileFullComponent implements OnInit {
  profile: ProfileItem;
  profileId = 0;

  constructor(
    private bioService: CoachesBioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.profileId = +params['id'];
      this.getCoachProfileData(this.profileId).then(profile => this.profile = profile);
    });
  }

  getCoachProfileData(id: number): Promise<ProfileItem>  {
    return this.bioService.getProfileById(id).then(function(data){
      return Promise.resolve(data);
    });
  }

}
