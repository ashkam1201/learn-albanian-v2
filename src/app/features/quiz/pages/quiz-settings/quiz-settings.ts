import { Component, computed, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuizCard } from '../../../../shared/ui/quiz-card/quiz-card';
import { QuizSettingsService } from '../../services/quiz-settings.service';

@Component({
  selector: 'app-quiz-settings',
  standalone: true,
  imports: [QuizCard, MatCheckboxModule],
  templateUrl: './quiz-settings.html',
  styleUrl: './quiz-settings.scss',
})
export class QuizSettings {
  private readonly settings = inject(QuizSettingsService);

  protected showHints = computed(() => this.settings.showHints());

  toggleHints(checked: boolean): void {
    this.settings.setShowHints(checked);
  }
}
