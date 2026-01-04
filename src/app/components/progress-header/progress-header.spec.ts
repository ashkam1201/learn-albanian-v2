import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHeader } from './progress-header';

describe('ProgressHeader', () => {
  let component: ProgressHeader;
  let fixture: ComponentFixture<ProgressHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
