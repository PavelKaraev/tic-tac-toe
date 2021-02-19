import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() idx: number;
  @Input() value: 'X' | 'O';
  @Output() onClick = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

  }

  move(id: number) {
    this.onClick.emit(id)
  }


}
