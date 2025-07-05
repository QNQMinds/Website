import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { CourcesPageComponent } from '../components/cources-page/cources-page.component';
import { AboutComponent } from '../components/about/about.component';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('../layouts/project-layout/project-layout.component').then(
        (m) => m.ProjectLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'course', component: CourcesPageComponent },
      { path: 'about', component: AboutComponent },
    //   { path: 'contact', component: ContactComponent },
    ],
  },
];


