import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { TodoItem } from '../app.component'

@Component({
  selector: 'w-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {


  @Input()
  public items!: TodoItem[]

  @Input()
  public totalItemsCount!: number

  @Output()
  public add = new EventEmitter<string>()

  @Output()
  public toggle = new EventEmitter<number>()

  @Output()
  public edit = new EventEmitter<{ id: number, text: string }>()

  public get isEmpty () {
    return this.totalItemsCount == 0
  }

  public get isItemsEmpty () {
    return this.items.length == 0
  }

  public trackById (index: number, item: TodoItem): number {
    return item.id
  }

}
