import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit, AfterViewInit {
  @Input() public sidenav;
  isLoading: boolean;

  constructor(public snackBar: MatSnackBar) {
  }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {
    this.isLoading = false;
  }

  public contactSnackBar() {
    this.snackBar.open('Poczta dostępna wkrótce!', null, {
      duration: 2000,
    });
  }
}
