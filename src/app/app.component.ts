import { Component } from '@angular/core'

let counter = 0

export interface TodoItem {
  id: number
  text: string
  isCompleted: boolean
}

export type Filter = 'all' | 'complete' | 'incomplete'

@Component({
  selector: 'w-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public items: TodoItem[] = []
  public selectedFilter: Filter = 'all'

  public get visibleItems (): TodoItem[] {
    switch (this.selectedFilter) {
      case 'all':
        return this.items
      case 'complete':
        return this.items.filter(item => item.isCompleted)
      case 'incomplete':
        return this.items.filter(item => !item.isCompleted)
    }
  }

  public addItem (itemText: string): void {
    const trimmed = itemText.trim()
    if (trimmed.length == 0) return
    const newItem = {
      id: counter++,
      text: trimmed,
      isCompleted: false,
    }
    this.items = [...this.items, newItem]
  }

  public toggle (id: number): void {
    const index = this.items.findIndex(item => item.id == id)
    if (index == -1) {
      throw new Error(`Item with ID ${id} not found.`)
    }
    const oldItem = this.items[index]
    const newItem: TodoItem = { ...oldItem, isCompleted: !oldItem.isCompleted }
    const before = this.items.slice(0, index)
    const after = this.items.slice(index + 1)
    this.items = [...before, newItem, ...after]
  }

  public edit ({ id, text }: { id: number, text: string }): void {
    const index = this.items.findIndex(item => item.id == id)
    if (index == -1) {
      throw new Error(`Item with ID ${id} not found.`)
    }
    const oldItem = this.items[index]
    const newItem: TodoItem = { ...oldItem, text }
    const before = this.items.slice(0, index)
    const after = this.items.slice(index + 1)
    this.items = [...before, newItem, ...after]
  }

  public changeFilter (filter: Filter) {
    this.selectedFilter = filter
  }

}

