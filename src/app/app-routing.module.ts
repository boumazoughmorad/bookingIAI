import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelmoduleComponent } from './modules/hotelmodule/hotelmodule.component';
import { HotelmoduleModule } from './modules/hotelmodule/hotelmodule.module';
import { Error403Component } from './shared/error-pages/error403/error403.component';
import { Error404Component } from './shared/error-pages/error404/error404.component';
import { Error500Component } from './shared/error-pages/error500/error500.component';
import { HomeComponent } from './shared/home/home.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';


const routes: Routes = [

 
  {
    
    path:'error500',
    component:Error500Component,
    
  },
  {
    
    path:'error403',
    component:Error403Component,
    
  },
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'',
        component: WelcomePageComponent,
        children:[
          {
            path:'',
            loadChildren: () =>import('./modules/hotelmodule/hotelmodule.module').then(m => m.HotelmoduleModule),
      
          },]
      },
      {
        path:'client',
        loadChildren: () =>import('./modules/clientmodule/clientmodule.module').then(m => m.ClientmoduleModule),
       // canActivate:[PermissionGuard],
     //data:{permissions:['Client']}
      },
      {
        path:'Hotel',
        loadChildren: () =>import('./modules/hotelmodule/hotelmodule.module').then(m => m.HotelmoduleModule),
  
      },
    ]
    },
  { 
    path: '**', 
    pathMatch: 'full',
    component: Error404Component
  },
  {
    path:'hotel',
    component:HotelmoduleComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
