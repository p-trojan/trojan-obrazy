import { Component, OnInit } from '@angular/core';
import { Creation } from '../_models/Creation';
import { Collection } from '../_models/Collection';
import { CreationService } from '../_services/creation.service';
import { log } from 'util';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.css']
})
export class CreationsComponent implements OnInit {
  isMobile: boolean = false;
  collections: Collection[];
  creations: Creation[];

  constructor(private creationService: CreationService,
              breakPointObserver: BreakpointObserver) {
    breakPointObserver
      .observe([Breakpoints.Handset])
      .subscribe(res => this.isMobile = res.matches);

  }

  ngOnInit() {
    this.getCollection();
    log(`getCollection() from component: ${this.collections}`);

  }

  getCollection(): void {
    this.creationService.getCollectionArray()
      .subscribe(data => {
        this.collections = data
      });
  }

}
