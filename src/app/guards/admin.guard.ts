import { CanActivateFn } from '@angular/router';
import {UserRoles} from "./user-roles-enum";
export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('userRole') === UserRoles.Administrator) {
    return true;
  } else {
    alert("You don't have access to this page");
    return false;
  }
};
