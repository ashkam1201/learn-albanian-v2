import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBanner } from './feedback-banner';

describe('FeedbackBanner', () => {
  let component: FeedbackBanner;
  let fixture: ComponentFixture<FeedbackBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
