import { Component, EventEmitter, Inject, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Creation } from '../_models/Creation';

@Component({
  selector: 'creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrls: ['./creation-dialog.component.css']
})
export class CreationDialogComponent implements OnInit {
  public onButtonClick: EventEmitter<number> = new EventEmitter();
  public creationId: number;

  constructor(
    public dialogRef: MatDialogRef<CreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit() {
    this.creationId = this.data.item.id;
  }

  private onNoClick(): void {
    this.dialogRef.close();
  }

  private prevItem() {
    console.log("Prev button clicked");
    this.onButtonClick.emit(this.creationId - 1);
  }

  private nextItem() {
    console.log("Next button clicked");
    this.onButtonClick.emit(this.creationId + 1);
  }

}
