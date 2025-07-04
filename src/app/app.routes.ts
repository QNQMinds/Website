import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('../layouts/project-layout/project-layout.component').then(
        (m) => m.ProjectLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent }
    //   { path: 'about', component: AboutUsComponent },
    //   { path: 'contact', component: ContactComponent },
    ],
  },
];


