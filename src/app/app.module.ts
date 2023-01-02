import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardComponentComponent } from './components/card-component/card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    SkillsSectionComponent,
    ContactFormComponent,
    NavItemComponent,
    AboutMeComponent,
    CardComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
