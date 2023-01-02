import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MainComponent } from './components/main/main.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {path: "", component:MainComponent, data:{animation: 'HomePage'}},
  {path:"acerca-de", component: AboutMeComponent, data:{animation: 'AboutPage'}},
  {path: "contacto", component: ContactFormComponent, data:{animation: 'ContactPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserAnimationsModule]
})
export class AppRoutingModule {}
