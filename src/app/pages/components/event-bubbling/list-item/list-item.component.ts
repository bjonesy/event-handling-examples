import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ListItem } from '@app/pages/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input()
  listItem: ListItem;

  @Input()
  index: number;

  @Output()
  readonly onRemoveListItem = new EventEmitter<number>();
}
