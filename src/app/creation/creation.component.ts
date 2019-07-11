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
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large
      ])
      .subscribe((res: BreakpointState) => {
        switch (res.matches) {
          case breakPointObserver.isMatched(Breakpoints.XSmall):
            this.enablePopupDialog = false;
            this.colsNumber = 1;
            this.gutter = 16;
            break;
          case breakPointObserver.isMatched(Breakpoints.Small):
            this.enablePopupDialog = false;
            this.colsNumber = 2;
            this.gutter = 16;
            break;
          case breakPointObserver.isMatched(Breakpoints.Medium):
            this.enablePopupDialog = true;
            this.colsNumber = 3;
            this.gutter = 24;
            break;
          case breakPointObserver.isMatched(Breakpoints.Large):
            this.enablePopupDialog = true;
            this.colsNumber = 3;
            this.gutter = 24;
            break;
        }
      });
  }

  ngOnInit() {
    this.getCollection();
  }

  ngAfterViewChecked(): void {
    this.tabNum = this.tabs.length;

    // console.log(this.tabs)
    // console.log(this.tabs.length)
  }

  getCollection(): void {
    this.creationService.getCollectionArray()
      .subscribe(data => {
        this.collections = data;
      });
  }

  swipe(eType){
    console.log(`eType :: ${eType}`);
    if(eType === this.SWIPE_ACTION.LEFT && this.tabSelected > 0){
      // console.log("movin left")
      this.tabSelected--;
    }
    else if(eType === this.SWIPE_ACTION.RIGHT && this.tabSelected + 1 < this.tabNum ){
      // console.log("movin right")
      this.tabSelected++;
    }
    // console.log(this.tabSelected)
  }
}

