import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Filter } from '../app.component'

@Component({
  selector: 'w-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {

  @Input()
  public filter!: Filter

  @Output()
  public filterChange = new EventEmitter<Filter>()

  public get isSelectedAll () {
    return this.filter == 'all' ? 'selected' : ''
  }

  public get isSelectedComplete () {
    return this.filter == 'complete' ? 'selected' : ''
  }

  public get isSelectedIncomplete () {
    return this.filter == 'incomplete' ? 'selected' : ''
  }

}
