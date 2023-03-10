import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainButtonComponent } from './components/btn-main/btn-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    ContactFormComponent,
    AboutMeComponent,
    CardComponentComponent,
    PageNotFoundComponent,
    MainButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
