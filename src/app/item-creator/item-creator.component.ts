import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'w-item-creator',
  templateUrl: './item-creator.component.html',
  styleUrls: ['./item-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCreatorComponent {

  @Output()
  public add = new EventEmitter<string>()

  public onSubmit (event: Event): void {
    event.preventDefault()
    const $form = event.target as HTMLFormElement
    const $input = $form.elements.namedItem('text') as HTMLInputElement
    const { value } = $input
    const trimmed = value.trim()
    if (trimmed.length == 0) return
    this.add.emit(trimmed)
    $input.value = ''
  }

}
