import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-over-message',
  templateUrl: './game-over-message.component.html',
  styleUrls: ['./game-over-message.component.css']
})
export class GameOverMessageComponent implements OnInit {

  @Input() text:string;
  @Output() gameStart = new EventEmitter<void>();
  

  constructor() { }

  ngOnInit(): void {
  }

  startNewGame(): void {
    this.gameStart.emit();
  }

}
