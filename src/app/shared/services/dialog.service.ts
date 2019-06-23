import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { EMPTY, forkJoin, Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

import { ConfirmActionComponent } from '../components';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirm(
    title: Observable<string>,
    message: Observable<string>,
    confirmAction: Observable<string>,
    cancelAction?: Observable<string>,
    shortCircuitCancel = true
  ): Observable<any> {
    const config = {
      panelClass: 'confirm-action-prompt-dialog',
      width: '800px',
      data: {}
    } as MatDialogConfig;

    // tslint:disable-next-line: deprecation
    return forkJoin(title, message, confirmAction, cancelAction || of('')).pipe(
      mergeMap(labels => {
        config.data.title = labels[0] || '';
        config.data.message = labels[1] || '';
        config.data.confirmAction = labels[2] || 'Confirm';
        config.data.cancelAction = labels[3] || 'Cancel';

        return this.dialog.open(ConfirmActionComponent, config).afterClosed();
      }),
      switchMap(isConfirmed => (shortCircuitCancel && !isConfirmed ? EMPTY : of(isConfirmed)))
    );
  }
}
