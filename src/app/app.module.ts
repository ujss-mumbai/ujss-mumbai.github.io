import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DonateComponent } from './donate/donate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutOdishaComponent } from './about-odisha/about-odisha.component';
import { EventsComponent } from './events/events.component';
import { SouvenirComponent } from './souvenir/souvenir.component';
import { JagaranPatrikaComponent } from './jagaran-patrika/jagaran-patrika.component';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { CancerPatientComponent } from './cancer-patient/cancer-patient.component';
import { CowsComponent } from './cows/cows.component';
import { SocialOrganizationsComponent } from './social-organizations/social-organizations.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    HomeComponent,
    ContactsComponent,
    DonateComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AboutOdishaComponent,
    EventsComponent,
    SouvenirComponent,
    JagaranPatrikaComponent,
    BloodDonationComponent,
    CancerPatientComponent,
    CowsComponent,
    SocialOrganizationsComponent,
    FeedbackComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
