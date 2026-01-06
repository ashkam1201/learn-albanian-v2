import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hint-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hint-button.html',
  styleUrl: './hint-button.scss',
})
export class HintButton {
  @Input() disabled = false;
  @Input() hintsLeft = 0;
  @Output() requestHint = new EventEmitter<void>();
}
