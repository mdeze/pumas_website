export class ProfileItem {
    public picture: string;
    public thumbnail: string;
    public title: string;
    public division: string;
    public team: string;
    public years: number;

    public summary: string;

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public isHeadCoach: boolean
    ) {
        // defaults
        this.thumbnail = '/assets/img/coach.png';
        this.picture = '/assets/img/coach.png';
        this.title = (isHeadCoach) ? 'Head Coach' : 'Asst Coach';
        this.division = 'TBD';
        this.team = 'TBD';
        this.years = 0;
        this.summary = 'Profile summary not avilable';
    }
}
