import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contactCompoenet', component: ContactComponent},
    { path: 'projectComponent', component: ProjectsComponent}
];
