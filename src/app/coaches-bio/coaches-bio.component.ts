import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ProfileItem } from '../data/content/profile/ProfileItem';

declare var jquery: any;
declare var $: any;

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

  redirectProfile() {
    $('#bioModal').modal('hide');
    this.router.navigate(['./coaches-profile-full/' + this.profile.id]);
  }
}
