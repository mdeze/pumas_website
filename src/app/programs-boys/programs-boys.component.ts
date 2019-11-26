import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-boys',
  templateUrl: './programs-boys.component.html',
  styleUrls: ['./programs-boys.component.css']
})
export class ProgramsBoysComponent implements OnInit {
  fallProgramCurrentStatus = "";
  prepProgramCurrentStatus = "";
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  prepProgramIsActive(){
    let registerStartDate = new Date("11/01/2019");
    let registerEndDate = new Date("12/01/2019");
    let practiceStartDate = new Date("12/01/2019");
    let practiceEndDate = new Date("02/24/2020");
    let completedEndDate = new Date("03/31/2020");

    if (this.today > registerStartDate && this.today < registerEndDate)
    {
      this.prepProgramCurrentStatus="* Registering Now *";
      return true;
    }
    else if (this.today > practiceStartDate && this.today < practiceEndDate){
      this.prepProgramCurrentStatus="* In Progress *";
      return true;
    }
    else if (this.today > practiceEndDate && this.today < completedEndDate){
      this.prepProgramCurrentStatus="* Session Completed *";
      return true;
    }

    return false;
  }

  fallProgramIsActive(){
    let registerStartDate = new Date("09/01/2019");
    let registerEndDate = new Date("10/13/2019");
    let practiceStartDate = new Date("10/13/2019");
    let practiceEndDate = new Date("11/24/2019");
    let completedEndDate = new Date("12/31/2019");

    if (this.today > registerStartDate && this.today < registerEndDate)
    {
      this.fallProgramCurrentStatus="* Registering Now *";
      return true;
    }
    else if (this.today > practiceStartDate && this.today < practiceEndDate){
      this.fallProgramCurrentStatus="* In Progress *";
      return true;
    }
    else if (this.today > practiceEndDate && this.today < completedEndDate){
      this.fallProgramCurrentStatus="* Session Completed *";
      return true;
    }

    return false;

  }


  

}
