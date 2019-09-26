import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ClubContactComponent } from './club-contact/club-contact.component';
import { ClubFaqComponent } from './club-faq/club-faq.component';
import { ClubSideMenuComponent } from './club-side-menu/club-side-menu.component';
import { ClubAboutComponent } from './club-about/club-about.component';
import { ClubBodComponent } from './club-bod/club-bod.component';
import { ClubDirectionsComponent } from './club-directions/club-directions.component';
import { LinksSideMenuComponent } from './links-side-menu/links-side-menu.component';
import { LinksMiscComponent } from './links-misc/links-misc.component';
import { LinksOutdoorTournamentsComponent } from './links-outdoor-tournaments/links-outdoor-tournaments.component';
import { LinksSummerCampsComponent } from './links-summer-camps/links-summer-camps.component';
import { NewsAnnouncementsComponent } from './news-announcements/news-announcements.component';
import { NewsRecentComponent } from './news-recent/news-recent.component';
import { ProgramsClubComponent } from './programs-club/programs-club.component';
import { ProgramsCostComponent } from './programs-cost/programs-cost.component';
import { ProgramsInhouseComponent } from './programs-inhouse/programs-inhouse.component';
import { ProgramsJncComponent } from './programs-jnc/programs-jnc.component';
import { ProgramsOpenComponent } from './programs-open/programs-open.component';
import { ProgramsBoysComponent } from './programs-boys/programs-boys.component';
import { ProgramsPhilosophyComponent } from './programs-philosophy/programs-philosophy.component';
import { ProgramsParentsGuideComponent } from './programs-parents-guide/programs-parents-guide.component';
import { ProgramsSideMenuComponent } from './programs-side-menu/programs-side-menu.component';
import { TryoutSideMenuComponent } from './tryout-side-menu/tryout-side-menu.component';
import { TryoutsExpectComponent } from './tryouts-expect/tryouts-expect.component';
import { TryoutsGuidelinesComponent } from './tryouts-guidelines/tryouts-guidelines.component';
import { TryoutsRegistrationComponent } from './tryouts-registration/tryouts-registration.component';
import { TryoutsResultsComponent } from './tryouts-results/tryouts-results.component';
import { AgegroupTesterComponent } from './agegroup-tester/agegroup-tester.component';
import { ScheduleSideMenuComponent } from './schedule-side-menu/schedule-side-menu.component';
import { ScheduleNextComponent } from './schedule-next/schedule-next.component';
import { ScheduleTournamentComponent } from './schedule-tournament/schedule-tournament.component';
import { ScheduleTryoutsComponent } from './schedule-tryouts/schedule-tryouts.component';
import { TeamRosterSideMenuComponent } from './team-roster-side-menu/team-roster-side-menu.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { UsavRegistrationComponent } from './usav-registration/usav-registration.component';
import { CoachesSideMenuComponent } from './coaches-side-menu/coaches-side-menu.component';
import { CoachesRegistrationComponent } from './coaches-registration/coaches-registration.component';
import { CoachesProfilesComponent } from './coaches-profiles/coaches-profiles.component';
import { CoachesPageComponent } from './coaches-page/coaches-page.component';
import { CoachesInterestedComponent } from './coaches-interested/coaches-interested.component';
import { CoachesBioComponent } from './coaches-bio/coaches-bio.component';
import { CoachesProfileFullComponent } from './coaches-profile-full/coaches-profile-full.component';
import { HomeComponent } from './home/home.component';
import { GalleryTournamentResultsComponent } from './gallery-tournament-results/gallery-tournament-results.component';
import { GallerySideMenuComponent } from './gallery-side-menu/gallery-side-menu.component';
import { GalleryAdditionsComponent } from './gallery-additions/gallery-additions.component';
import { GalleryChampionsComponent } from './gallery-champions/gallery-champions.component';
import { GalleryChampionsListComponent } from './gallery-champions-list/gallery-champions-list.component';
import { GalleryOffCourtComponent } from './gallery-off-court/gallery-off-court.component';
import { GalleryOffCourtListComponent } from './gallery-off-court-list/gallery-off-court-list.component';
import { GalleryOnCourtComponent } from './gallery-on-court/gallery-on-court.component';
import { GalleryOnCourtListComponent } from './gallery-on-court-list/gallery-on-court-list.component';
import { Programs12uCoedComponent } from './programs-12u-coed/programs-12u-coed.component';
import { Programs12uCoedFallComponent } from './programs-12u-coed-fall/programs-12u-coed-fall.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'club-contact', component: ClubContactComponent },
  { path: 'club-faq', component: ClubFaqComponent },
  { path: 'club-about', component: ClubAboutComponent },
  { path: 'club-bod', component: ClubBodComponent },
  { path: 'club-directions', component: ClubDirectionsComponent },
  { path: 'links-outdoor-tournaments', component: LinksOutdoorTournamentsComponent },
  { path: 'links-summer-camps', component: LinksSummerCampsComponent },
  { path: 'links-misc', component: LinksMiscComponent },
  { path: 'programs-club', component: ProgramsClubComponent },
  { path: 'programs-open', component: ProgramsOpenComponent },
  { path: 'programs-jnc', component: ProgramsJncComponent },
  { path: 'programs-boys', component: ProgramsBoysComponent },
  { path: 'programs-12u-coed', component: Programs12uCoedComponent },
  { path: 'programs-12u-coed-fall', component: Programs12uCoedFallComponent },
  { path: 'programs-inhouse', component: ProgramsInhouseComponent },
  { path: 'programs-cost', component: ProgramsCostComponent },
  { path: 'programs-parents-guide', component: ProgramsParentsGuideComponent },
  { path: 'programs-philosophy', component: ProgramsPhilosophyComponent },
  { path: 'tryouts-expect', component: TryoutsExpectComponent },
  { path: 'tryouts-guidelines', component: TryoutsGuidelinesComponent },
  { path: 'tryouts-registration', component: TryoutsRegistrationComponent },
  { path: 'tryouts-results', component: TryoutsResultsComponent },
  { path: 'schedule-tournament', component: ScheduleTournamentComponent },
  { path: 'schedule-tryouts', component: ScheduleTryoutsComponent },
  { path: 'team-roster/:year', component: TeamRosterComponent },
  { path: 'usav-registration', component: UsavRegistrationComponent },
  { path: 'coaches-profiles', component: CoachesProfilesComponent },
  { path: 'coaches-profile-full/:id', component: CoachesProfileFullComponent },
  { path: 'coaches-interested', component: CoachesInterestedComponent },
  { path: 'coaches-registration', component: CoachesRegistrationComponent },
  { path: 'coaches-page', component: CoachesPageComponent },
  { path: 'gallery-champions/:year', component: GalleryChampionsComponent },
  { path: 'gallery-champions-list', component: GalleryChampionsListComponent },
  { path: 'gallery-off-court-list', component: GalleryOffCourtListComponent },
  { path: 'gallery-off-court/:year', component: GalleryOffCourtComponent },
  { path: 'gallery-on-court-list', component: GalleryOnCourtListComponent },
  { path: 'gallery-on-court/:year', component: GalleryOnCourtComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // handle bad links/404s
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ClubContactComponent,
    ClubFaqComponent,
    ClubSideMenuComponent,
    ClubAboutComponent,
    ClubBodComponent,
    ClubDirectionsComponent,
    LinksSideMenuComponent,
    LinksMiscComponent,
    LinksOutdoorTournamentsComponent,
    LinksSummerCampsComponent,
    NewsAnnouncementsComponent,
    NewsRecentComponent,
    ProgramsClubComponent,
    ProgramsCostComponent,
    ProgramsInhouseComponent,
    ProgramsJncComponent,
    ProgramsBoysComponent,
    ProgramsOpenComponent,
    ProgramsPhilosophyComponent,
    ProgramsSideMenuComponent,
    TryoutSideMenuComponent,
    TryoutsExpectComponent,
    TryoutsGuidelinesComponent,
    TryoutsRegistrationComponent,
    TryoutsResultsComponent,
    AgegroupTesterComponent,
    ScheduleSideMenuComponent,
    ScheduleNextComponent,
    ScheduleTournamentComponent,
    ScheduleTryoutsComponent,
    TeamRosterSideMenuComponent,
    TeamRosterComponent,
    UsavRegistrationComponent,
    CoachesSideMenuComponent,
    CoachesRegistrationComponent,
    CoachesProfilesComponent,
    CoachesProfileFullComponent,
    CoachesPageComponent,
    CoachesInterestedComponent,
    CoachesBioComponent,
    HomeComponent,
    GalleryTournamentResultsComponent,
    GallerySideMenuComponent,
    GalleryAdditionsComponent,
    GalleryChampionsComponent,
    GalleryChampionsListComponent,
    GalleryOffCourtComponent,
    GalleryOffCourtListComponent,
    GalleryOnCourtComponent,
    GalleryOnCourtListComponent,
    ProgramsParentsGuideComponent,
    Programs12uCoedComponent,
    ProgramsBoysComponent,
    Programs12uCoedFallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6HhJcsPCxP7jnO5_C2_DSpmO7kltiuzI'
    }),
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
