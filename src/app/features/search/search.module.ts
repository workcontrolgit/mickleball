import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchContainerComponent } from './container/search-container/search-container.component';

@NgModule({
  declarations: [SearchComponent, SearchInputComponent, SearchListComponent, SearchContainerComponent],
  imports: [CommonModule, SearchRoutingModule],
  providers: [],
})
export class SearchModule {}
