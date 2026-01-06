import { Injectable, computed, signal } from '@angular/core';

export interface QuizResultRecord {
  score: number;
  total: number;
  playedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class QuizHistoryService {
  private readonly records = signal<QuizResultRecord[]>([]);

  readonly allRecords = computed(() => this.records());

  addRecord(score: number, total: number, playedAt: Date = new Date()): void {
    this.records.update((existing) => [{ score, total, playedAt }, ...existing]);
  }
}
