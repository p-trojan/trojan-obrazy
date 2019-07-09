import { OverlayRef } from '@angular/cdk/overlay';

export class CreationPreviewOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.overlayRef.dispose();
  }
}
