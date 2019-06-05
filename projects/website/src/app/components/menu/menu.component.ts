import { Component, OnInit } from '@angular/core';
import { LandingService } from '@website/services/landing.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'kinam-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuHidden$: Observable<{ hidden: boolean }>;

  constructor(
    private landingService: LandingService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.menuHidden$ = this.landingService.menuHidden$;
  }

  public close() {
    this.landingService.setMenu({ hidden: true });
  }

  public navigate(url?: string) {
    this.router.navigate([`/${url}`]);
    this.landingService.setMenu({ hidden: true });
  }
}
