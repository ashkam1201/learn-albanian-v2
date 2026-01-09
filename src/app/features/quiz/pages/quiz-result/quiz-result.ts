import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { QuizCard } from '../../../../shared/ui/quiz-card/quiz-card';
import { QuizHistoryService } from '../../services/quiz-history.service';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [CommonModule, QuizCard],
  templateUrl: './quiz-result.html',
  styleUrl: './quiz-result.scss',
})
export class QuizResult {
  protected history = inject(QuizHistoryService);
}
