import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBrandComponent } from './components/navbar/nav-brand/nav-brand.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NavBrandComponent,
    IntroSectionComponent,
    SkillsSectionComponent,
    ContactFormComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
