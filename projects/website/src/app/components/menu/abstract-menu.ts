import { LandingService } from '../../services';

export abstract class AbstractMenu {

    constructor(
        private landingService: LandingService
    ) { }


    public toggleMenu() {
        this.landingService.toggleMenu();
    }
}