import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userData', component: UserDataComponent},
  {path: 'userDetails', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
