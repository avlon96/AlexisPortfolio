import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [], // Add services here (optional)
  bootstrap: [], 
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class AppModule { }