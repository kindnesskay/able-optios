import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NdisComponent } from './ndis/ndis.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'ndis',
    component:NdisComponent,
  },
  {
    path: 'services',
    component:ServicesComponent,
  },
  {
    path: 'team',
    component:TeamComponent,
  },
  {
    path: 'contact-us',
    component:ContactUsComponent,
  },
];
