import { Component, OnInit } from '@angular/core';
import { Creation } from '../_models/Creation';
import { CreationService } from '../_services/creation.service';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.css']
})
export class CreationsComponent implements OnInit {
  title1 = 'app 1';
  title2 = 'app 2';

  creations: Creation[];

  constructor(private creationService: CreationService) { }

  ngOnInit() {
    console.log('from component: ', this.creationService.getCreations())
  }

  private getCreations() {
    this.creationService.getCreations()
      .subscribe(creations => this.creations = creations)
  }

}
