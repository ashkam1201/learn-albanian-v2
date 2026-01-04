import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRules } from './quiz-rules';

describe('QuizRules', () => {
  let component: QuizRules;
  let fixture: ComponentFixture<QuizRules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizRules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizRules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
