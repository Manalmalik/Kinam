import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { CmsService } from 'core';
import { map } from 'rxjs/operators';

interface Nawal {
  Characteristics: string;
  Meaning: string;
  Name: string;
}

@Component({
  selector: 'kinam-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  public nawales: Nawal[];
  public selectedNawal: Nawal;

  constructor(
    private _builder: AnimationBuilder,
    private cmsService: CmsService,
  ) { }

  ngOnInit() {
    this.cmsService.getCollection('Nawales').pipe(
      map(data => data.entries)
    ).subscribe(
      (res: Nawal[]) => {
        this.nawales = res;
      }
    );

    const anim = this._builder.build([
      style({
        transform: `translateY(-100px)`,
        opacity: '0'
      }),
      animate(
        '400ms ease-out',
        style({
          transform: `translateY(0px)`,
          opacity: '1'
        }),
      )
    ]);

    setTimeout(() => anim.create(this.main.nativeElement).play(), 200);
  }

  public setNawal(name: string) {
    if (!this.nawales) { return; }

    this.selectedNawal = this.nawales.find(n => n.Name === name);
  }

}
