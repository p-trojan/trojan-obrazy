import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {
  @Input() public sidenav;

  constructor(public snackBar: MatSnackBar) {}

  public ngOnInit() {
  }
  public contactSnackBar() {
    this.snackBar.open('This function is not available yet!', '=(', {
      duration: 2000,
    });
  }

  public shareSnackBar() {
    this.snackBar.open('Sharing is not available yet!', '=(', {
      duration: 2000,
    });
  }

}
