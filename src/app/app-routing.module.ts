import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DonateComponent } from './donate/donate.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutOdishaComponent } from './about-odisha/about-odisha.component';
import { EventsComponent } from './events/events.component';
import { SouvenirComponent } from './souvenir/souvenir.component';
import { JagaranPatrikaComponent } from './jagaran-patrika/jagaran-patrika.component';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { CancerPatientComponent } from './cancer-patient/cancer-patient.component';
import { SocialOrganizationsComponent } from './social-organizations/social-organizations.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CowsComponent } from './cows/cows.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "donate", component: DonateComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "about-odisha", component: AboutOdishaComponent},
  {path: "events", component: EventsComponent}, 
  {path: "souvenir", component: SouvenirComponent},
  {path: "jagaran-patrika", component: JagaranPatrikaComponent},
  {path: "blood-donation", component: BloodDonationComponent},
  {path: "cancer-patient", component: CancerPatientComponent},
  {path: "social-organizations", component: SocialOrganizationsComponent},
  {path: "feedback", component: FeedbackComponent},
  {path: "cows", component: CowsComponent},
  {path: "gallery", component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
