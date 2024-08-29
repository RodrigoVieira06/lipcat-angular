import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'intranet',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'intranet',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './AppModule'
      })
        .then((m) => m.AppModule)
        .catch((err) => console.error(err))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
