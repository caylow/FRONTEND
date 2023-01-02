import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MainComponent } from './components/main/main.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {path: "", component:MainComponent},
  {path:"acerca-de", component: AboutMeComponent},
  {path: "contacto", component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
