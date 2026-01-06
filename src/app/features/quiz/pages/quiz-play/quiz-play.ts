import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AnswerInput } from '../../../../components/answer-input/answer-input';
import { FeedbackBanner } from '../../../../components/feedback-banner/feedback-banner';
import { HintButton } from '../../../../components/hint-button/hint-button';
import { HintPanel } from '../../../../components/hint-panel/hint-panel';
import { NextButton } from '../../../../components/next-button/next-button';
import { ProgressHeader } from '../../../../components/progress-header/progress-header';
import { QuestionPrompt } from '../../../../components/question-prompt/question-prompt';
import { QuizCard } from '../../../../shared/ui/quiz-card/quiz-card';
import { QuizEngineService } from '../../services/quiz-engine.service';
import { QuizHistoryService } from '../../services/quiz-history.service';
import { QuizSettingsService } from '../../services/quiz-settings.service';

@Component({
  selector: 'app-quiz-play',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    QuizCard,
    ProgressHeader,
    QuestionPrompt,
    AnswerInput,
    HintButton,
    HintPanel,
    FeedbackBanner,
    NextButton,
  ],
  templateUrl: './quiz-play.html',
  styleUrl: './quiz-play.scss',
})
export class QuizPlay {
  protected quizEngine = inject(QuizEngineService);
  protected quizSettings = inject(QuizSettingsService);
  protected quizHistory = inject(QuizHistoryService);
  protected finished = signal(false);
  protected recordedResult = signal(false);

  protected currentIndexDisplay = computed(() => this.quizEngine.currentIndex() + 1);

  handleSubmit(answer: string): void {
    this.quizEngine.submitAnswer(answer);
  }

  handleNext(): void {
    if (this.quizEngine.isLastQuestion()) {
      if (!this.recordedResult()) {
        this.quizHistory.addRecord(
          this.quizEngine.score(),
          this.quizEngine.totalQuestions(),
          new Date()
        );
        this.recordedResult.set(true);
      }
      this.finished.set(true);
      return;
    }

    this.quizEngine.next();
  }

  handleRequestHint(): void {
    if (!this.quizSettings.showHints()) {
      return;
    }
    this.quizEngine.requestHint();
  }

  restart(): void {
    this.quizEngine.restart();
    this.finished.set(false);
    this.recordedResult.set(false);
  }
}
