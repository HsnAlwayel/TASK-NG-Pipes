import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import {
  CurrencyPipe,
  DatePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ColorPipePipe } from '../color-pipe.pipe';
import { LastLoginPipe } from '../last-login.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    ColorPipePipe,
    LastLoginPipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() data!: User;
}
