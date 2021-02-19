import { Component, Input, OnInit } from '@angular/core';
import { IPlayer, Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() players: IPlayer[];

  constructor() { }

  ngOnInit(): void {
  }

}
