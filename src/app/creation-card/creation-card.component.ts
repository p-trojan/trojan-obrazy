import { MatSnackBar } from '@angular/material';
import { Creation } from '../_models/Creation';
import { Component, Input, OnInit } from '@angular/core';
import { CreationService } from '../_services/creation.service';
import { CreationPreviewOverlayService } from '../_services/creation-preview-overlay.service';
import { CreationPreviewOverlayRef } from '../creation-preview-overlay/creation-preview-overlay-ref';


@Component({
  selector: 'creation-card',
  styleUrls: ['./creation-card.component.css'],
  templateUrl: 'creation-card.component.html'
})
export class CreationCardComponent implements OnInit {
  @Input() public selectedCreation: Creation;
  condition: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private creationService: CreationService,
    private previewDialog: CreationPreviewOverlayService) {
  }

  showPreview(creation) {
    let dialogRef: CreationPreviewOverlayRef = this.previewDialog.open({data: creation});
  }

  public ngOnInit() {
  }

  private onClick() {
    this.snackBar.open('Enlarge function is not available yet!', '=(', {
      duration: 2000,
    });
  }

  private onSelect(id: number): Creation {
    return this.selectedCreation;
  }

}
