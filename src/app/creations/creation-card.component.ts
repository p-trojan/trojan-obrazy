import { CreationDialogComponent } from './creation-dialog.component';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { Creation } from '../_models/Creation';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CreationService } from '../_services/creation.service';


@Component({
  selector: 'creation-card',
  styleUrls: ['./creation-card.component.css'],
  templateUrl: 'creation-card.component.html'
})
export class CreationCardComponent implements OnInit {
  @Input() public selectedCreation: Creation;
  public creationId: number;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog, private creationService: CreationService) {
  }

  public ngOnInit() {
    // this.creationId = this.selectedCreation.id;
  }

  private onClick() {
    this.snackBar.open('Enlarge function is not available yet!', '=(', {
      duration: 2000,
    });
  }

  // private onChange(value: number): void {
  //   this.selectedCreation.id = value;
  // }

  // private onSelect(): Creation {
  //   this.creationId = this.selectedCreation.id;
  //   console.log('from selectedCreation-card.component: ', this.creationId);
  //   return this.selectedCreation;
  // }

  private onSelect(id: number): Creation {
    // this.creationId = this.selectedCreation.id;
    // console.log('from selectedCreation-card.component: ', this.creationId);
    // this.selectedCreation.id = id;
    return this.selectedCreation;
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(CreationDialogComponent, {
      width: 'auto',
      height: 'auto',
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: {
        item: this.onSelect(this.creationId)
      }
    });
    const next = dialogRef.componentInstance.onButtonClick
      .subscribe((value) => {
      this.onSelect(value);
      console.log(`from dialog (${value})`, this.onSelect(value));
    });
    dialogRef.afterClosed().subscribe(() => {
      // console.log('The dialog was closed');
      next.unsubscribe();
    });
  }

}
