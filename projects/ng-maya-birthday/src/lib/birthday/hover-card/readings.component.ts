import { Component } from '@angular/core';

@Component({
  selector: 'kinam-readings',
  template: `
    <div class="hover-container">
      <div class="outer">
        <div class="inner overlay" id="overlay"></div>
        <div class="inner outline"></div>
        <div class="behind fill">
          <div class="text">
            Get your Tzolkʼin Readings
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./readings.component.scss']
})
export class GetReadingComponent { }
