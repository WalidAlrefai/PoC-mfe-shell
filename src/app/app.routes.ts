import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { ShellHomeComponent } from './shell-home/shell-home.component';
import { ShellAboutComponent } from './shell-about/shell-about.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellHomeComponent
  },
  {
    path: 'shell-about',
    component: ShellAboutComponent
  },
  {
    path: 'mfe-remote1',
    loadChildren: () =>
      loadRemoteModule('mfe-remote1', './routes').then((m) => m.routes),
  },
  {
    path: 'mfe-remote2',
    loadComponent: () =>
      loadRemoteModule('mfe-remote2', './Remote2Component').then((m) => m.AppComponent),
  },
];
