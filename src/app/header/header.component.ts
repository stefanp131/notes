import { Component, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private auth = inject(Auth);
  user$ = user(this.auth);

  constructor(
    public accountService: AccountService,
  ) {}

  ngOnInit(): void {
    
  }

  logout() {
    this.accountService.logout();
  }
}
