import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss']
})
export class ConfirmActionComponent {
  title: string;
  message: string;
  confirmAction: string;
  cancelAction: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.message = data.message;
    this.confirmAction = data.confirmAction;
    this.cancelAction = data.cancelAction;
  }

  onCloseConfirm(): void {
    this.dialogRef.close();
  }
}
