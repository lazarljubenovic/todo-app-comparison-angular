import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ListComponent } from './list/list.component'
import { FiltersComponent } from './filters/filters.component'
import { ItemCreatorComponent } from './item-creator/item-creator.component'
import { ItemComponent } from './item/item.component'
import { EditItemComponent } from './edit-item/edit-item.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FiltersComponent,
    ItemCreatorComponent,
    ItemComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
