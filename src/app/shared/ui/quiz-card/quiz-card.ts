import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-quiz-card',
  imports: [MatCardModule],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.scss',
})
export class QuizCard {
  /**
   * Aligns the card's inner content. Default is left to suit forms/settings; use "center" for hero sections.
   */
  @Input() align: 'left' | 'center' = 'left';
}
