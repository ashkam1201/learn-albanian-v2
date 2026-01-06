import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-progress-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './progress-header.html',
  styleUrl: './progress-header.scss',
})
export class ProgressHeader {
  @Input() currentIndex = 1;
  @Input() total = 0;
  @Input() score = 0;
}
