import { Injectable, computed, signal } from '@angular/core';
import { Question } from '../models/question';

type AnswerStatus = 'idle' | 'correct' | 'wrong';

@Injectable({
  providedIn: 'root',
})
export class QuizEngineService {
  private readonly questions = signal<Question[]>([
    { id: 'q1', prompt: 'mirë', fromLang: 'AL', toLang: 'EN', answer: 'good', hint: 'Opposite of bad' },
    { id: 'q2', prompt: 'house', fromLang: 'EN', toLang: 'AL', answer: 'shtëpi', hint: 'Starts with "sh"' },
    { id: 'q3', prompt: 'bukë', fromLang: 'AL', toLang: 'EN', answer: 'bread' },
    { id: 'q4', prompt: 'water', fromLang: 'EN', toLang: 'AL', answer: 'ujë', hint: 'You drink it every day' },
    { id: 'q5', prompt: 'faleminderit', fromLang: 'AL', toLang: 'EN', answer: 'thank you', hint: 'A polite phrase' },
    { id: 'q6', prompt: 'sun', fromLang: 'EN', toLang: 'AL', answer: 'diell' },
    { id: 'q7', prompt: 'natë', fromLang: 'AL', toLang: 'EN', answer: 'night' },
    { id: 'q8', prompt: 'friend', fromLang: 'EN', toLang: 'AL', answer: 'mik', hint: 'Someone you trust' },
  ]);

  readonly currentIndex = signal(0);
  readonly score = signal(0);
  readonly status = signal<AnswerStatus>('idle');
  readonly lastAnswer = signal<string | null>(null);
  readonly hintsLeft = signal(3);
  readonly currentHint = signal<string | null>(null);

  readonly totalQuestions = computed(() => this.questions().length);
  readonly currentQuestion = computed(() => this.questions()[this.currentIndex()] ?? null);
  readonly isLastQuestion = computed(() => this.currentIndex() >= this.totalQuestions() - 1);
  readonly answerSubmitted = computed(() => this.status() !== 'idle');

  submitAnswer(rawAnswer: string): void {
    const question = this.currentQuestion();
    if (!question || this.status() !== 'idle') {
      return;
    }

    const normalizedAnswer = rawAnswer.trim();
    this.lastAnswer.set(normalizedAnswer);

    const isCorrect =
      normalizedAnswer.toLocaleLowerCase() === question.answer.trim().toLocaleLowerCase();

    if (isCorrect) {
      this.score.update((value) => value + 1);
      this.status.set('correct');
    } else {
      this.status.set('wrong');
    }
  }

  next(): void {
    if (this.isLastQuestion()) {
      return;
    }

    this.currentIndex.update((index) =>
      Math.min(index + 1, Math.max(this.totalQuestions() - 1, 0))
    );
    this.resetQuestionState();
  }

  restart(): void {
    this.currentIndex.set(0);
    this.score.set(0);
    this.resetQuestionState();
    this.hintsLeft.set(3);
  }

  requestHint(): string | null {
    const question = this.currentQuestion();

    if (!question || this.hintsLeft() <= 0 || this.currentHint() || this.status() !== 'idle') {
      return null;
    }

    const hintText =
      question.hint ?? `Starts with: ${question.answer.trim().charAt(0).toLocaleUpperCase()}`;

    this.hintsLeft.update((value) => value - 1);
    this.currentHint.set(hintText);

    return hintText;
  }

  private resetQuestionState(): void {
    this.status.set('idle');
    this.lastAnswer.set(null);
    this.currentHint.set(null);
  }
}
