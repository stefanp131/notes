import { Component, inject } from '@angular/core';
import { AccountService } from './_services/account.service';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private auth = inject(Auth);
  user$ = user(this.auth);

  constructor(private accountService: AccountService) {
    this.accountService.isAuthenticated.next(!!this.user$);
  }
}
