import { Component, OnInit } from '@angular/core';

declare var moment: any;

@Component({
  selector: 'app-agegroup-tester',
  templateUrl: './agegroup-tester.component.html',
  styleUrls: ['./agegroup-tester.component.css']
})
export class AgegroupTesterComponent implements OnInit {
  playerMonth = 1;
  playerDay = 1;
  playerYear = 1994;
  calculatedPlayerAgeGroup = '';

  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  months = [
    { number: 1, name: 'January' },
    { number: 2, name: 'February' },
    { number: 3, name: 'March' },
    { number: 4, name: 'April' },
    { number: 5, name: 'May' },
    { number: 6, name: 'June' },
    { number: 7, name: 'July' },
    { number: 8, name: 'August' },
    { number: 9, name: 'September' },
    { number: 10, name: 'October' },
    { number: 11, name: 'November' },
    { number: 12, name: 'December' }
  ];
  years = [];
  currentYear = moment().year();

  ages = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9];
  ageGroups = [];

  constructor() { }

  ngOnInit() {
    // load available birth years for supported age groups
    for (const age of this.ages) {
      this.years.push(this.currentYear - age);
    }
    // load age group start dates
    this.loadAgeGroups();
  }

  // load age group start day, are you x age on 09/01
  // in 2017, a 16U player' birthdate in on or after 09/01/2001
  loadAgeGroups() {
    for (const age of this.ages) {
      const ageGroupStartDate = (this.currentYear - age) + '-09-01';
      const group = age + 'U';
      this.ageGroups.push({ageGroup: group, startDate: ageGroupStartDate});
    }
  }

  setMonth(month: number) {
    this.playerMonth = month;
  }

  setDay(day: number) {
    this.playerDay = day;
  }

  setYear(year: number) {
    this.playerYear = year;
  }

  // is your birthday on or after 9/1/CCYY
  calculateAgeGroup() {
    const birthdate: string = this.playerMonth + '/' + this.playerDay + '/' + this.playerYear;
    let ageGroup = 'UNK';
    let ageGroupDisplay = birthdate + ' would play in unavailable age group. Contact Club Director.';

    for (const age of this.ageGroups) {
      if (moment(birthdate).isSameOrAfter(age.startDate)) {
        ageGroup = age.ageGroup;
      }
    }

    // normalize age groups
    // 14U -> 13 & 14, 12U -> 9-12
    switch (ageGroup) {
      case '13U':
        ageGroup = '14U';
        break;
      case '11U':
        ageGroup = '12U';
        break;
      case '10U':
        ageGroup = '12U';
        break;
      case '9U':
        ageGroup = '12U';
        break;
      default:
        ageGroup = ageGroup;
    }

    if (ageGroup !== 'UNK') {
      ageGroupDisplay = birthdate + ' would play in ' + ageGroup + ' age group';
    }

    this.calculatedPlayerAgeGroup = ageGroupDisplay;
  }

}
