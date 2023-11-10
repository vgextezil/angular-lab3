import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {registerLocaleData} from "@angular/common";
import localeUa from '@angular/common/locales/uk';

registerLocaleData(localeUa, 'uk-UA');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userRole: any =  localStorage.getItem('userRole');
  users: any[] = [
    {
      id: 1,
      firstName: 'Сергій',
      lastName: 'Пазюк',
      dateOfBirth: Date.parse('1990-01-01'),
      salary: 1000,
      workingHours: 478484
    },
    {
      id: 2,
      firstName: 'Іван',
      lastName: 'Макринич',
      dateOfBirth: Date.parse('1990-01-02'),
      salary: 1000,
      workingHours: 478484
    },
    {
      id: 3,
      firstName: 'Влад',
      lastName: 'Бобко',
      dateOfBirth: Date.parse('1990-01-03'),
      salary: 1000,
      workingHours: 478484
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: Date.parse('1990-01-04'),
      salary: 1000,
      workingHours: 478484
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: Date.parse('1990-01-05'),
      salary: 1000,
      workingHours: 4784840000
    },
    {
      id: 6,
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: Date.parse('1990-01-06'),
      salary: 1000,
      workingHours: 3636377
    },
    {
      id: 7,
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: Date.parse('1990-01-07'),
      salary: 1000,
      workingHours: 333333
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: Date.parse('1990-01-08'),
      salary: 1000,
      workingHours: 100000000
    }
  ];
  id: number;
  constructor(private activateRoute: ActivatedRoute){
    this.id = activateRoute.snapshot.params['id'];
  }
}
