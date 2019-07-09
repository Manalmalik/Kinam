import { Component } from '@angular/core';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'kinam-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.scss']
})
export class PlaybookComponent {

  constructor(private landingService: LandingService) { }

  public number: any = {};

  public toggleMenu() {
    this.landingService.toggleMenu();
  }

  public handleDateChange({ day, month, year }) {
    this.number = { day, month, year };
  }
}
