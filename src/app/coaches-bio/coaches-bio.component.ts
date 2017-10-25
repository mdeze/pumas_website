import { Component, Input, OnInit } from '@angular/core';

import { ProfileItem } from '../data/content/profile/ProfileItem';

@Component({
  selector: 'app-coaches-bio',
  templateUrl: './coaches-bio.component.html',
  styleUrls: ['./coaches-bio.component.css']
})
export class CoachesBioComponent implements OnInit {

  @Input() profile: ProfileItem;

  constructor() { }

  ngOnInit() {
  }

}
