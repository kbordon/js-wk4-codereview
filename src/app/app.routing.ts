import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StickiesComponent } from './stickies/stickies.component';
import { SplashComponent } from './splash/splash.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'stickies',
    component: StickiesComponent
  },
  {
    path: 'knownbug',
    component: AboutComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
