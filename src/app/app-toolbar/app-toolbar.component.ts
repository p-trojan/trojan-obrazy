import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {
  @Input() public sidenav;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open("Not implemented yet");
  }

}
