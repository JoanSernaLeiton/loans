import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDetailEntity } from '@home/domain';
import { Router } from '@angular/router';

@Component({
  selector: 'klym-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() userDetail: UserDetailEntity | null = null;

  constructor(private readonly router: Router) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
