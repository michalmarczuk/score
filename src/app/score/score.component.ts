import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() name: string;
  score: number = 0;
  change: number = 1;

  constructor() { }

  ngOnInit(): void { }

  addScore() {
    this.score += this.change;
    if (this.score > 999) this.score = 999;

    this.change = 1;
  }
  
  subtractScore() {
    this.score -= this.change;
    if (this.score < 0) this.score = 0;

    this.change = 1;
  }

}
