import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ProgramsClubComponent } from './programs-club/programs-club.component';
import { ProgramsOpenComponent } from './programs-open/programs-open.component';
import { ProgramsJncComponent } from './programs-jnc/programs-jnc.component';
import { ProgramsInhouseComponent } from './programs-inhouse/programs-inhouse.component';
import { ProgramsPhilosophyComponent } from './programs-philosophy/programs-philosophy.component';
import { TryoutsExpectComponent } from './tryouts-expect/tryouts-expect.component';
import { TryoutsGuidelinesComponent } from './tryouts-guidelines/tryouts-guidelines.component';
import { TryoutsRegistrationComponent } from './tryouts-registration/tryouts-registration.component';
import { TryoutsResultsComponent } from './tryouts-results/tryouts-results.component';
import { ScheduleTournamentComponent } from './schedule-tournament/schedule-tournament.component';
import { ScheduleTryoutsComponent } from './schedule-tryouts/schedule-tryouts.component';
import { CoachesProfilesComponent } from './coaches-profiles/coaches-profiles.component';
import { CoachesInterestedComponent } from './coaches-interested/coaches-interested.component';
import { CoachesRegistrationComponent } from './coaches-registration/coaches-registration.component';
import { ClubAboutComponent } from './club-about/club-about.component';
import { ClubBodComponent } from './club-bod/club-bod.component';
import { ClubContactComponent } from './club-contact/club-contact.component';
import { ClubDirectionsComponent } from './club-directions/club-directions.component';
import { ClubFaqComponent } from './club-faq/club-faq.component';
import { HomeComponent } from './home/home.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { GalleryChampionsComponent } from './gallery-champions/gallery-champions.component';
import { GalleryChampionsListComponent } from './gallery-champions-list/gallery-champions-list.component';
import { GallerySideMenuComponent } from './gallery-side-menu/gallery-side-menu.component';
import { ClubSideMenuComponent } from './club-side-menu/club-side-menu.component';
import { CoachesSideMenuComponent } from './coaches-side-menu/coaches-side-menu.component';
import { ProgramsSideMenuComponent } from './programs-side-menu/programs-side-menu.component';
import { ScheduleSideMenuComponent } from './schedule-side-menu/schedule-side-menu.component';
import { TryoutSideMenuComponent } from './tryout-side-menu/tryout-side-menu.component';
import { NewsRecentComponent } from './news-recent/news-recent.component';
import { ScheduleNextComponent } from './schedule-next/schedule-next.component';
import { NewsAnnouncementsComponent } from './news-announcements/news-announcements.component';
import { GalleryTournamentResultsComponent } from './gallery-tournament-results/gallery-tournament-results.component';
import { ProgramsCostComponent } from './programs-cost/programs-cost.component';
import { AgegroupTesterComponent } from './agegroup-tester/agegroup-tester.component';
import { UsavRegistrationComponent } from './usav-registration/usav-registration.component';
import { LinksOutdoorTournamentsComponent } from './links-outdoor-tournaments/links-outdoor-tournaments.component';
import { LinksSummerCampsComponent } from './links-summer-camps/links-summer-camps.component';
import { LinksSideMenuComponent } from './links-side-menu/links-side-menu.component';
import { LinksMiscComponent } from './links-misc/links-misc.component';
import { GalleryAdditionsComponent } from './gallery-additions/gallery-additions.component';
import { CoachesPageComponent } from './coaches-page/coaches-page.component';
import { GalleryOnCourtComponent } from './gallery-on-court/gallery-on-court.component';
import { GalleryOffCourtComponent } from './gallery-off-court/gallery-off-court.component';
import { GalleryOffCourtListComponent } from './gallery-off-court-list/gallery-off-court-list.component';
import { GalleryOnCourtListComponent } from './gallery-on-court-list/gallery-on-court-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ProgramsClubComponent,
    ProgramsOpenComponent,
    ProgramsJncComponent,
    ProgramsInhouseComponent,
    ProgramsPhilosophyComponent,
    TryoutsExpectComponent,
    TryoutsGuidelinesComponent,
    TryoutsRegistrationComponent,
    TryoutsResultsComponent,
    ScheduleTryoutsComponent,
    ScheduleTournamentComponent,
    CoachesProfilesComponent,
    CoachesInterestedComponent,
    CoachesRegistrationComponent,
    CoachesPageComponent,
    ClubAboutComponent,
    ClubBodComponent,
    ClubContactComponent,
    ClubDirectionsComponent,
    ClubFaqComponent,
    HomeComponent,
    TeamRosterComponent,
    GalleryChampionsComponent,
    GalleryChampionsListComponent,
    GallerySideMenuComponent,
    GalleryAdditionsComponent,
    GalleryOnCourtComponent,
    GalleryOffCourtComponent,
    GalleryOffCourtListComponent,
    GalleryOnCourtListComponent,
    ClubSideMenuComponent,
    CoachesSideMenuComponent,
    ProgramsSideMenuComponent,
    ScheduleSideMenuComponent,
    TryoutSideMenuComponent,
    NewsRecentComponent,
    ScheduleNextComponent,
    NewsAnnouncementsComponent,
    GalleryTournamentResultsComponent,
    ProgramsCostComponent,
    AgegroupTesterComponent,
    UsavRegistrationComponent,
    LinksOutdoorTournamentsComponent,
    LinksSummerCampsComponent,
    LinksSideMenuComponent,
    LinksMiscComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6HhJcsPCxP7jnO5_C2_DSpmO7kltiuzI'
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'programs-club', component: ProgramsClubComponent },
      { path: 'programs-open', component: ProgramsOpenComponent },
      { path: 'programs-jnc', component: ProgramsJncComponent },
      { path: 'programs-inhouse', component: ProgramsInhouseComponent },
      { path: 'programs-cost', component: ProgramsCostComponent },
      { path: 'programs-philosophy', component: ProgramsPhilosophyComponent },
      { path: 'tryouts-expect', component: TryoutsExpectComponent },
      { path: 'tryouts-guidelines', component: TryoutsGuidelinesComponent },
      { path: 'tryouts-registration', component: TryoutsRegistrationComponent },
      { path: 'tryouts-results', component: TryoutsResultsComponent },
      { path: 'usav-registration', component: UsavRegistrationComponent },
      { path: 'team-roster/:year', component: TeamRosterComponent },
      { path: 'schedule-tournament', component: ScheduleTournamentComponent },
      { path: 'schedule-tryouts', component: ScheduleTryoutsComponent },
      { path: 'gallery-champions/:year', component: GalleryChampionsComponent },
      { path: 'gallery-champions-list', component: GalleryChampionsListComponent },
      { path: 'gallery-off-court-list', component: GalleryOffCourtListComponent },
      { path: 'gallery-on-court-list', component: GalleryOnCourtListComponent },
      { path: 'links-outdoor-tournaments', component: LinksOutdoorTournamentsComponent },
      { path: 'links-summer-camps', component: LinksSummerCampsComponent },
      { path: 'links-misc', component: LinksMiscComponent },
      { path: 'coaches-profiles', component: CoachesProfilesComponent },
      { path: 'coaches-interested', component: CoachesInterestedComponent },
      { path: 'coaches-registration', component: CoachesRegistrationComponent },
      { path: 'coaches-page', component: CoachesPageComponent },
      { path: 'club-about', component: ClubAboutComponent },
      { path: 'club-bod', component: ClubBodComponent },
      { path: 'club-contact', component: ClubContactComponent },
      { path: 'club-directions', component: ClubDirectionsComponent },
      { path: 'club-faq', component: ClubFaqComponent },
      { path: '', component: AppComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
