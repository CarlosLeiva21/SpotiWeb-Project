import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue(value: string){
    localStorage.setItem('Busqueda', JSON.stringify(value))
    this.onValue.emit(value);
  }

}
