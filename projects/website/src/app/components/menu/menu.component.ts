import { Component, OnInit } from '@angular/core';
import { LandingService } from '@website/routes/landing/landing.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'kinam-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuHidden$: Observable<{ hidden: boolean }>;

  constructor(
    private landingService: LandingService
  ) { }

  public ngOnInit() {
    this.menuHidden$ = this.landingService.menuHidden$;
  }

  public toggleMenu() {
    this.landingService.toggleMenu();
  }
}
