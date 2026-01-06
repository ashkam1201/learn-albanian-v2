import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-feedback-banner',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './feedback-banner.html',
  styleUrl: './feedback-banner.scss',
})
export class FeedbackBanner {
  @Input() status: 'idle' | 'correct' | 'wrong' = 'idle';
  @Input() correctAnswer = '';
  @Input() yourAnswer = '';
}
