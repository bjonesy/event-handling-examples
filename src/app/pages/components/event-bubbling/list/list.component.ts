import { Component, HostBinding, OnDestroy } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { DialogService } from '@app/shared/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy {
  listItems = [
    {
      id: 1,
      label: 'List item 1'
    },
    {
      id: 2,
      label: 'List item 2'
    },
    {
      id: 3,
      label: 'List item 3'
    },
    {
      id: 4,
      label: 'List item 4'
    }
  ];

  @HostBinding('class.list')
  addComponentClass = true;

  private dispose = new Subject<void>();

  constructor(private dialogService: DialogService) {}

  ngOnDestroy(): void {
    this.dispose.next();
    this.dispose.complete();
  }

  dialogConfirmation(confirmMessage: Observable<string>): Observable<any> {
    return this.dialogService.confirm(confirmMessage, of(undefined), of('Yes'), of('Cancel'));
  }

  onRemoveListItem(id: number): void {
    this.dialogConfirmation(of('Remove list item?'))
      .pipe(
        takeUntil(this.dispose),
        switchMap(() => (this.listItems = this.listItems.filter(x => x.id !== id)))
      )
      .subscribe();
  }
}
