import {Component} from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userRole: any = localStorage.getItem('userRole');
  users: any[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 4,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 6,
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 7,
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      salary: 1000,
      wokingHours: 478484
    }
  ]
}
