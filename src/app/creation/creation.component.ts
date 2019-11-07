import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Collection } from '../_models/Collection';
import { CreationService } from '../_services/creation.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatTab, MatTabGroup } from '@angular/material';
import { log } from 'util';

@Component({
  selector: 'app-creations',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit, AfterViewChecked {
  @ViewChild(MatTabGroup, {static: false}) tabsGroup;
  @ViewChildren(MatTab) tabs;
  tabNum: number;
  tabSelected: number = 0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  enablePopupDialog: boolean;
  colsNumber: number;
  gutter: number;
  collections: Collection[];

  constructor(private creationService: CreationService,
              breakPointObserver: BreakpointObserver) {
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
            this.enablePopupDialog = true;
            this.colsNumber = 3;
            this.gutter = 8;
            break;
          case breakPointObserver.isMatched(Breakpoints.Large):
            this.enablePopupDialog = true;
            this.colsNumber = 3;
            this.gutter = 8;
            break;
          case breakPointObserver.isMatched(Breakpoints.Medium):
            this.enablePopupDialog = true;
            this.colsNumber = 3;
            this.gutter = 8;
            break;
          case breakPointObserver.isMatched(Breakpoints.Small):
            this.enablePopupDialog = false;
            this.colsNumber = 2;
            this.gutter = 4;
            break;
          case breakPointObserver.isMatched(Breakpoints.XSmall):
            this.enablePopupDialog = false;
            this.colsNumber = 2;
            this.gutter = 4;
            break;
        }
      });
  }

  ngOnInit() {
    this.getCollection();
  }

  ngAfterViewChecked(): void {
    this.tabNum = this.tabs.length;
  }

  getCollection(): void {
    this.creationService.getCollectionArray()
      .subscribe(json => {
        this.collections = json["data"];
      });
  }

  swipe(eType){
    // console.log(`eType :: ${eType}`);
    if(eType === this.SWIPE_ACTION.LEFT && this.tabSelected > 0){
      this.tabSelected--;
    }
    else if(eType === this.SWIPE_ACTION.RIGHT && this.tabSelected + 1 < this.tabNum ){
      this.tabSelected++;
    }
  }
}

