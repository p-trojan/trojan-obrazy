import { CreationDialogComponent } from '../creation-dialog/creation-dialog.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Creation } from '../_models/Creation';
import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../_models/Collection';

@Component({
  selector: 'creation-card',
  styleUrls: ['./creation-card.component.css'],
  templateUrl: 'creation-card.component.html'
})
export class CreationCardComponent implements OnInit {
  @Input() public dialogEnabled: boolean;
  @Input() public selectedCollection: Collection;
  @Input() public selectedCreation: Creation;
  private condition: boolean;

  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {}

  public ngOnInit() {
  }

  private onClick() {
    this.snackBar.open('Enlarge function is not available yet!', '=(', {
      duration: 2000,
    });
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(CreationDialogComponent, {
      panelClass: 'custom-dialog-container',
      backdropClass: 'dark-backdrop',
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: {
        creations: this.selectedCollection.content,
        item: this.selectedCreation
      }
    });

    const next = dialogRef.componentInstance.onButtonClick
      .subscribe((value) => {
        dialogRef.componentInstance.data.item = value;
      });

    dialogRef.afterClosed().subscribe(() => {
      next.unsubscribe();
    });
  }
}
