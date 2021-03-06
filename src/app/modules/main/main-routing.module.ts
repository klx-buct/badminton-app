import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'sign',
        loadChildren: () => import('./sign/sign.module').then(m => m.SignModule)
      },
      {
        path: 'referee',
        loadChildren: () => import('./referee/referee.module').then(m => m.RefereeModule)
      },
      {
        path: 'my',
        loadChildren: () => import('./my/my.module').then(m => m.MyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
