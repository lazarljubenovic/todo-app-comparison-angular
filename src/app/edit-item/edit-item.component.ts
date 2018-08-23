import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TodoItem } from '../app.component'

@Component({
  selector: 'w-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent {

  @Input()
  public item!: TodoItem

  @Output()
  public submit = new EventEmitter<string | null>()

  public value: string = ''

  public onChange (event: KeyboardEvent): void {
    const $input = event.target as HTMLInputElement
    const { value } = $input
    this.value = value
  }

  public onKeyDown (event: KeyboardEvent): void {
    if (event.key == 'Enter') {
      event.preventDefault()
      this.submit.emit(this.value)
    } else if (event.key == 'Escape') {
      event.preventDefault()
      this.submit.emit(null)
    }
  }

}
