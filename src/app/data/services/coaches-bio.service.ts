import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ProfileItem } from '../content/profile/ProfileItem';
import { ExperienceItem } from '../content/profile/ExperienceItem';

@Injectable()
export class CoachesBioService {

  constructor(private http: Http) {}


  getAllProfiles(): Promise<ProfileItem[]> {
    const biosURL = '/assets/content/coach-bios/bios.data.json';
    return this.http.get(biosURL)
      .toPromise()
      .then(function(data){
          return data.json().data as ProfileItem[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }



  loadExperience(): ExperienceItem[] {
    const experience: ExperienceItem[] = [];
    experience[0] = new ExperienceItem(2017, 'Pumas VBC', 'Sapphire 16U', 'Head Coach');
    experience[1] = new ExperienceItem(2016, 'Andover Pumas', 'Sapphire 15U', 'Head Coach');
    experience[2] = new ExperienceItem(2015, 'Andover Pumas', 'Sapphire 14U', 'Head Coach');
    experience[3] = new ExperienceItem(2014, 'Andover Pumas', 'Sapphire 18U', 'Assistant Coach');

    return experience;
  }

  getAllProfilesOLD(): ProfileItem[] {
    const profileList: ProfileItem[] = [];

    const mike = new ProfileItem(49, 'Mike', 'Ezekiel', true);
    mike.thumbnail = '/assets/img/coaches/thumbnails/mike-ezekiel.jpg';
    mike.picture  = '/assets/img/coaches/mike-ezekiel.jpg';
    mike.division = '14U';
    mike.team = 'Sapphire';
    mike.years = 5;
    mike.summary = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p><p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>';
    mike.experience = this.loadExperience();
    profileList[0] = mike;

    const lizzy = new ProfileItem(16, 'Lizzy', 'Ezekiel', false);
    lizzy.thumbnail = '/assets/img/coaches/thumbnails/lizzy-ezekiel.jpg';
    lizzy.picture = '/assets/img/coaches/lizzy-ezekiel.jpg';
    lizzy.division = '14U';
    lizzy.team = 'Sapphire';

    const experience: ExperienceItem[] = [];
    experience[0] = new ExperienceItem(2017, 'Pumas VBC', 'Sapphire 16U', 'Team Captain');
    experience[1] = new ExperienceItem(2016, 'Andover Pumas', 'Sapphire 15U', 'Team Captain');
    experience[2] = new ExperienceItem(2015, 'Andover Pumas', 'Sapphire 14U', 'Team Captain');

    lizzy.experience = experience;

    lizzy.summary = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p><p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>';
    profileList[1] = lizzy;

    const stephen = new ProfileItem(1, 'Stephen', 'Boyle', true);
    stephen.thumbnail = '/assets/img/coaches/thumbnails/StephenBoyle.jpg';
    stephen.picture = '/assets/img/coaches/StephenBoyle.jpg';
    stephen.years = 30;
    stephen.experience = this.loadExperience();
    stephen.summary = '<p>I am the current President and Club Director for the Pumas Volleyball Club. I have been coaching virtually nonstop since 1983 and have coached Volleyball, Cross Country, Track + Field, Triathlons and Decathlons at the Junior High, High School, Collegiate and Adult level. As a coach I strive to help the athlete discover and develop their complete athletic ability. The success of the athlete, especially in the school age years, is in more than the wins and losses they compile. This includes teaching the athlete about nutrition, balancing life’s demands with the sports demands, integration of body and mind, visualization, goal setting, goal attainment, time management, strength of character, increasing self-esteem, leadership development and many other skills that can serve the athlete in their sport as well as their non-athletic life</p><p>Coaching has been one of my passions, and a second career, since 1983. I am constantly striving to improve my coaching and administrative skills to make the team experience more enjoyable and beneficial. I want to instill a love of the game, a desire to give your best effort for every point and the knowledge on how to pass that on to the next group of young athletes.</p>';
    profileList[2] = stephen;

    const bruce = new ProfileItem(2, 'Bruce', 'Shainwald', true);
    // bruce.years = 12;
    // bruce.division = '16U Open';
    // bruce.team = 'Emerald';
    profileList[3] = bruce;
    // this.profileList[2] = new ProfileItem(3, 'Brian', 'Healy', '/assets/img/coach.png', 'Head Coach');
    // this.profileList[3] = new ProfileItem(4, 'Dan', 'OConnor', '/assets/img/coach.png', 'Head Coach');
    // this.profileList[4] = new ProfileItem(5, 'Steve', 'McRoy', '/assets/img/coach.png', 'Head Coach');
    // this.profileList[5] = new ProfileItem(6, 'Bonnie', 'Zeigler', '/assets/img/coach.png', 'Asst Coach');

    return profileList;
  }



}
