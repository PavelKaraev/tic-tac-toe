export interface IPlayer {
  name: string,
  score: number;

  getName(name: string): string;
  getScore(score: number): number;
}

export class Player implements IPlayer {

  name: string;
  score: number;

  constructor(playerName: string, playerScore: number = 0) {
    this.name = playerName,
    this.score = playerScore;
  }

  getName(): string {
    return this.name;
  }

  getScore(): number {
    return this.score;
  }
}
