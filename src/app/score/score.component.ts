import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() name: string;
  @Output() scoreChanged: EventEmitter<playerScore> = new EventEmitter<playerScore>();
  score: number = 0;
  change: number = 1;
  @Input() isWinning: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  addScore() {
    this.score += this.change;
    if (this.score > 999) this.score = 999;

    this.change = 1;
    this.emitScore();
  }
  
  subtractScore() {
    this.score -= this.change;
    if (this.score < 0) this.score = 0;

    this.change = 1;
    this.emitScore();
  }

  private emitScore() {
    this.scoreChanged.emit({
      playerName: this.name,
      score: this.score
    });
  }
}

export interface playerScore {
  playerName: string;
  score: number;
}