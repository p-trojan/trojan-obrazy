import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'biography-card',
  styleUrls: ['./biography-card.component.css'],
  templateUrl: './biography-card.component.html'
})
export class BiographyCardComponent {
  colsNumber: number;
  imgCols: number;
  imgRows: number;
  paragraphCols: number;
  paragraphRows: number;
  gutter: number;
  rowHeight: string;

  constructor(breakPointObserver: BreakpointObserver) {
    breakPointObserver
      .observe([
        Breakpoints.XLarge,
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall
      ])
      .subscribe((breakpointState: BreakpointState) => {
        switch (breakpointState.matches) {
          case breakPointObserver.isMatched(Breakpoints.XLarge):
            this.colsNumber = 4;
            this.rowHeight = "1:1";
            this.imgCols = 1;
            this.imgRows = 1;
            this.paragraphCols = 3;
            this.paragraphRows = 1;
            this.gutter = 8;
            break;
          case breakPointObserver.isMatched(Breakpoints.Large):
            this.colsNumber = 4;
            this.rowHeight = "1:1";
            this.imgCols = 1;
            this.imgRows = 1;
            this.paragraphCols = 3;
            this.paragraphRows = 1;
            this.gutter = 8;
            break;
          case breakPointObserver.isMatched(Breakpoints.Medium):
            this.colsNumber = 4;
            this.rowHeight = "1:1";
            this.imgCols = 1;
            this.imgRows = 1;
            this.paragraphCols = 3;
            this.paragraphRows = 1;
            this.gutter = 8;
            break;
          case breakPointObserver.isMatched(Breakpoints.Small):
            this.colsNumber = 4;
            this.rowHeight = "300px";
            this.imgCols = 1;
            this.imgRows = 1;
            this.paragraphCols = 3;
            this.paragraphRows = 1;
            this.gutter = 4;
            break;
          case breakPointObserver.isMatched(Breakpoints.XSmall):
            this.colsNumber = 1;
            this.rowHeight = "225px";
            this.imgCols = 1;
            this.imgRows = 1;
            this.paragraphCols = 1;
            this.paragraphRows = 2;
            this.gutter = 4;
            break;
        }
      });
  }
}
