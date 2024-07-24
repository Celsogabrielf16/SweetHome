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
    path: 'search/address/:addressSearched',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/minimunPrice/:minimunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/minimunPrice/:minimunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/minimunPrice/:minimunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'search/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms',
    loadChildren: () => import("./views/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'property-registration',
    loadChildren: () => import("./views/property-registration/property-registration.module").then(m => m.PropertyRegistrationModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import("./views/register/register.module").then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
