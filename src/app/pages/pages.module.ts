import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent, ListComponent, ListItemComponent } from './components';
import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  declarations: [HomeComponent, ListComponent, ListItemComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  exports: [],
  providers: []
})
export class PagesModule {}
