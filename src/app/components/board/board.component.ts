import { Component, OnInit } from '@angular/core';
import { IPlayer, Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  players: IPlayer[] = [];
  winner: string;
  draw: boolean;
  board: any[];
  moveCounter: number = 0;
  xIsNext: boolean;

  constructor() { }

  ngOnInit(): void {
    let playerOneName: string;
    let playerTwoName: string;

    while(!playerOneName || playerOneName == null || playerOneName == " ") {
      playerOneName = prompt('What is first player name?', 'Player 1');
    }

    while(!playerTwoName || playerTwoName == null || playerTwoName == " ") {
      playerTwoName = prompt('What is second player name?', 'Player 2');
    }

    this.players.push(new Player(playerOneName));
    this.players.push(new Player(playerTwoName));
    this.startNewGame()
  }

  moveOn(id: number) {
    this.moveCounter++;
    this.board[id] = this.xIsNext ? 'X' : 'O';
    this.xIsNext = !this.xIsNext;

    this.winner = this.determineWinner();
    this.draw = this.determineDraw();
  }

  startNewGame() {
    this.board = new Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
    this.draw = null;
    this.moveCounter = 0;
  }

  determineWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        if(this.board[a] === 'X') {
          ++this.players[0].score;
          return this.players[0].name;
        } else {
          ++this.players[1].score;
          return this.players[1].name;
        }
      }
    }
    return null;
  }

  determineDraw() {
    let fullArray = this.board.every((square) => {
      return square;
    })

    return fullArray && !this.winner;
  }

}
