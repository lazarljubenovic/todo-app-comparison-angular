import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TodoItem } from '../app.component'

@Component({
  selector: 'w-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input()
  public item!: TodoItem

  @Output()
  public toggle = new EventEmitter<void>()

  @Output()
  public edit = new EventEmitter<{ id: number, text: string }>()

  public isEditMode = false

  public get toggleText () {
    return this.item.isCompleted ? `Undo` : `Done`
  }

  public get className () {
    return this.item.isCompleted ? 'complete' : ''
  }

  public onEditClick (): void {
    this.isEditMode = true
  }

  public onEditSubmit (text: string | null): void {
    this.isEditMode = false
    if (text != null) {
      const data = { id: this.item.id, text }
      this.edit.emit(data)
    }
  }

}
