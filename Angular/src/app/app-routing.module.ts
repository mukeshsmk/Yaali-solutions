import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'edit/:_id',
    component: EditComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }