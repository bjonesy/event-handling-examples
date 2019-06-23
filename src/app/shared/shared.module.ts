import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';

import { ConfirmActionComponent } from './components';
import { DialogService } from './services';

@NgModule({
  declarations: [ConfirmActionComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: [ConfirmActionComponent, MatButtonModule, MatIconModule, MatDialogModule],
  entryComponents: [ConfirmActionComponent],
  providers: [DialogService]
})
export class SharedModule {}
