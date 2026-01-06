import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { QuizCard } from '../../../../shared/ui/quiz-card/quiz-card';
import { QuizHistoryService } from '../../services/quiz-history.service';

@Component({
  selector: 'app-quiz-profile',
  standalone: true,
  imports: [CommonModule, MatListModule, QuizCard],
  templateUrl: './quiz-profile.html',
  styleUrl: './quiz-profile.scss',
})
export class QuizProfile {
  protected history = inject(QuizHistoryService);
}
