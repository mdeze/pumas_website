import { ExperienceItem } from './ExperienceItem';

export class ProfileItem {
    public picture = '/assets/img/coach.png';
    public thumbnail = '/assets/img/coach.png';
    public title: string;
    public hasFullBio: boolean;
    public division = 'TBD';
    public age = 'TBD';
    public team = 'TBD';
    public years = 0;
    public experience: ExperienceItem[];
    public summary = 'Profile summary not avilable';

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public isHeadCoach: boolean
    ) {}
}
