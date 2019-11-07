import { Component, EventEmitter, HostListener, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Creation } from '../_models/Creation';

const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

@Component({
  selector: 'creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrls: ['./creation-dialog.component.css']
})

export class CreationDialogComponent implements OnInit {
  @Output() onButtonClick = new EventEmitter<Creation>();
  loading: boolean = false;

  @HostListener('document:keydown', ['$event']) private handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case ARROW_LEFT:
        this.prevItem();
        break;
      case ARROW_RIGHT:
        this.nextItem();
        break;
    }
  }

  constructor(
    public dialogRef: MatDialogRef<CreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit() {
  }

  onLoad(event: Event) {
    this.loading = false;
  }

  public prevItem() {
    let num = this.data.item.id - 1;
    if (num < 1) {
      num = this.data.creations.length;
    }
    const creation = this.data.creations.find(item => item.id === num);
    this.onButtonClick.emit(creation);
  }

  public nextItem() {
    let num = this.data.item.id + 1;
    if (num > this.data.creations.length) {
      num = 1;
    }
    const creation = this.data.creations.find(item => item.id === num);
    this.onButtonClick.emit(creation);
  }
}
