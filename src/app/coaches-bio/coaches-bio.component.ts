import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ProfileItem } from '../data/content/profile/ProfileItem';

@Component({
  selector: 'app-coaches-bio',
  templateUrl: './coaches-bio.component.html',
  styleUrls: ['./coaches-bio.component.css']
})
export class CoachesBioComponent implements OnInit {

  @Input() profile: ProfileItem;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectProfile(id: number) {
    // this.router.navigate(['./coaches-profile-full/' + id]);
    alert('foobaz!');
  }
}
