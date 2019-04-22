import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "kinam-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  public date = new Date();
}
