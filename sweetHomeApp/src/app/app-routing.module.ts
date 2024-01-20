import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./views/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import("./views/details/details.module").then(m => m.DetailsModule)
  },
  {
    path: 'search',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'property-registration',
    loadChildren: () => import("./views/property-registration/property-registration.module").then(m => m.PropertyRegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
