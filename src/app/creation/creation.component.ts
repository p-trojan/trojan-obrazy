import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Collection } from '../_models/Collection';
import { CreationService } from '../_services/creation.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-creations',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  colsNumber: number;
  collections: Collection[];

  constructor(private creationService: CreationService,
              breakPointObserver: BreakpointObserver) {
    breakPointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large
      ])
      .subscribe((res: BreakpointState) => {
        switch (res.matches) {
          case breakPointObserver.isMatched(Breakpoints.XSmall):
            this.colsNumber = 1;
            break;
          case breakPointObserver.isMatched(Breakpoints.Small):
            this.colsNumber = 2;
            break;
          case breakPointObserver.isMatched(Breakpoints.Medium):
            this.colsNumber = 3;
            break;
          case breakPointObserver.isMatched(Breakpoints.Large):
            this.colsNumber = 4;
            break;
        }
      });
  }

  ngOnInit() {
    this.getCollection();
  }

  getCollection(): void {
    this.creationService.getCollectionArray()
      .subscribe(data => {
        this.collections = data;
      });
  }
}

