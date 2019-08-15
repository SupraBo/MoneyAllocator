import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LastComponent } from './last/last.component';

const routes: Routes = [

  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'last',
    component: LastComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
