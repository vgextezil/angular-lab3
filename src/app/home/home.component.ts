import { Component } from '@angular/core';
import {UserRoles} from "../guards/user-roles-enum";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userRole: any = localStorage.getItem('userRole');

  changeUserRole(role: string) {
    localStorage.setItem('userRole', role);
    location.reload();
  }
  ifcheck(role: string){
    if (role== localStorage.getItem('userRole')) {
      return true;
    }
    else
    return false;
  }

  protected readonly UserRoles = UserRoles;
}




