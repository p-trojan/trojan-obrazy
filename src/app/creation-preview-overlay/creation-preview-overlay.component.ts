import { Component, HostListener, Inject } from '@angular/core';
import { CreationPreviewOverlayRef } from './creation-preview-overlay-ref';
import { CREATION_PREVIEW_DIALOG_DATA } from './creation-preview-overlay.tokens';

const ESCAPE_KEY: string = 'Escape';
const ARROW_RIGHT: string = 'ArrowRight';
const ARROW_LEFT: string = 'ArrowLeft';

@Component({
  selector: 'creation-preview-overlay',
  templateUrl: './creation-preview-overlay.component.html',
  styleUrls: ['./creation-preview-overlay.component.css']
})

export class CreationPreviewOverlayComponent  {

  @HostListener('document:keydown', ['$event']) private handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case ESCAPE_KEY:
        this.dialogRef.close();
        break;
      case ARROW_RIGHT:
        this.nextItem();
        break;
      case ARROW_LEFT:
        this.prevItem();
        break;
    }
  }

  loading: boolean = false;

  constructor(
    public dialogRef: CreationPreviewOverlayRef,
    @Inject(CREATION_PREVIEW_DIALOG_DATA) public data: any) {}

    onLoad(event: Event) {
      this.loading = false;
    }

    prevItem() {
      console.log("nothing prev");
    }

    nextItem() {
      console.log("nothing next");
    }
}
