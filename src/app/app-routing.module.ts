import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {UserComponent} from "./user/user.component";
import {NoAccessComponent} from "./no-access/no-access.component";
import {adminGuard} from "./guards/admin.guard";
import {moderatorGuard} from "./guards/moderator.guard";
import {userGuard} from "./guards/user.guard";

const routes: Routes = [
  {path: 'home' ,component:HomeComponent, canActivate: [userGuard]},
  {path: 'users', component:UsersComponent, canActivate : [moderatorGuard]},
  {path: 'user/:id', component:UserComponent, canActivate: [adminGuard]},
  {path: 'no-access', component:NoAccessComponent},
  {path: '404', component:NotfoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
