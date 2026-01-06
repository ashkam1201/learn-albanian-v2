import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizSettingsService {
  readonly showHints = signal(true);

  setShowHints(value: boolean): void {
    this.showHints.set(value);
  }
}
