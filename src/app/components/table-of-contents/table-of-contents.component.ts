import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss']
})
export class TableOfContentsComponent implements OnInit {

  public sections: Array<string> = [
    'What are the Observables?',
    'Phases of Observables',
    'Observable methods',
    'Observable Example',
    'Observable Piping',
    'Operators',
    'References'
  ];

  @Output()
  private onSelectionChanged: EventEmitter<number>;

  constructor() {
    this.onSelectionChanged = new EventEmitter<number>();
  }

  public getSelectedSectionIndex(index: number): void {
    this.onSelectionChanged.emit(index);
  }

  ngOnInit(): void {
  }

}
