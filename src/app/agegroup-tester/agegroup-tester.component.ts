import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agegroup-tester',
  templateUrl: './agegroup-tester.component.html',
  styleUrls: ['./agegroup-tester.component.css']
})
export class AgegroupTesterComponent implements OnInit {
  playerMonth: number = 1;
  playerDay: number = 1;
  playerYear: number = 1994;
  calculatedPlayerAgeGroup: string = '';

  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  years = [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006];
  months = [
    { number: 1, name: "January" },
    { number: 2, name: "February" },
    { number: 3, name: "March" },
    { number: 4, name: "April" },
    { number: 5, name: "May" },
    { number: 6, name: "June" },
    { number: 7, name: "July" },
    { number: 8, name: "August" },
    { number: 9, name: "September" },
    { number: 10, name: "October" },
    { number: 11, name: "November" },
    { number: 12, name: "December" }
  ];

  constructor() { }

  ngOnInit() {
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

  calculateAgeGroup() {
    let birthdate: string = this.playerMonth + '/' + this.playerDay + '/' + this.playerYear;
    let ageGroup = '';

    /* Comparison date for this season */
    let compareMonth = 8;
    let compareDay = 31;

    /* If this years season is complete, use next year for checking. For simplicity,
      assume anything later than compareMonth means the season is over */

    let now = new Date();
    let compareYear = now.getFullYear();
    let thisMonth = now.getMonth();

    if (thisMonth >= compareMonth) {
      compareYear++;
    }

    let	years = compareYear - this.playerYear;

    if (compareMonth <= this.playerMonth) {
      if (this.playerMonth === compareMonth) {
        if (this.playerDay > compareDay) {
          years--;
        } else {
          years--;
        }
      }
    }

    let unknownAge = false;

    switch (years) {
      case 18:
        ageGroup = '18U';
        break;
      case 17:
        ageGroup = '17/18U';
        break;
      case 16:
        ageGroup = '16U';
        break;
      case 15:
        ageGroup = '15U';
        break;
      case 14:
        ageGroup = '14U';
        break;
      case 13:
        ageGroup = '14U';
        break;
      case 12:
        ageGroup = '12U';
        break;
      default:
        /* Set <= 12 to 12's Age Group */
        if (years <= 12) {
          ageGroup = '12U';
        } else {
          ageGroup = 'unknown';
          unknownAge = true;
        }
    }

    if (unknownAge) {
      this.calculatedPlayerAgeGroup = birthdate + ' would play in unavailable age group. Contact Club Director.';
    } else {
      this.calculatedPlayerAgeGroup = birthdate + ' would play in ' + ageGroup + ' age group';
    }
  }

}
