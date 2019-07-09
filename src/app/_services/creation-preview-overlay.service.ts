import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { CreationPreviewOverlayComponent } from '../creation-preview-overlay/creation-preview-overlay.component';
import { CreationPreviewOverlayRef } from '../creation-preview-overlay/creation-preview-overlay-ref';
import { CREATION_PREVIEW_DIALOG_DATA } from '../creation-preview-overlay/creation-preview-overlay.tokens';
import { CreationPreviewDialogConfig } from '../creation-preview-overlay/creation-preview-dialog.config';

const DEFAULT_CONFIG: CreationPreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  data: null
}

@Injectable()
export class CreationPreviewOverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  public open(config: CreationPreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new CreationPreviewOverlayRef(overlayRef);
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(() => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: CreationPreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private createInjector(config: CreationPreviewDialogConfig, dialogRef: CreationPreviewOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(CreationPreviewOverlayRef, dialogRef);
    injectionTokens.set(CREATION_PREVIEW_DIALOG_DATA, config.data);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: CreationPreviewDialogConfig, dialogRef: CreationPreviewOverlayRef) {
    const injector = this.createInjector(config, dialogRef);
    const containerPortal = new ComponentPortal(CreationPreviewOverlayComponent, null, injector);
    const containerRef: ComponentRef<CreationPreviewOverlayComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private getOverlayConfig(config: CreationPreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
