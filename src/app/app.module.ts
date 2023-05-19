import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfoilComponent } from './components/portfoil/portfoil.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';

// import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderBarComponent,
    AboutComponent,
    PortfoilComponent,
    ContactComponent,
    TestemonialsComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatIconModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
