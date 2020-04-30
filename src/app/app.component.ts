import { Component } from '@angular/core';
import {playerScore} from 'src/app/score/score.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'score';
  players: Player[] = [
    {
      name: 'Kamilka',
      score: 0,
      isWinning: false
    },
    {
      name: 'Michał',
      score: 0,
      isWinning: false
    }
  ]

  updateStatus(playerScore: playerScore) {
    // Update score on player
    this.players.find(player => player.name === playerScore.playerName).score = playerScore.score;

    // Set isWinning to false on each player
    this.players.forEach(player => player.isWinning = false);

    const scores: number[] = this.players.map(player => player.score);
    // Return if it is a tie
    if (new Set(scores).size !== scores.length) {
      return;
    }

    const maxScore = Math.max(...scores);
    this.players.find(player => player.score === maxScore).isWinning = true;

  }
}

interface Player {
  name: string;
  score: number;
  isWinning: boolean;
}