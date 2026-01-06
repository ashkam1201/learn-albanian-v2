import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-next-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './next-button.html',
  styleUrl: './next-button.scss',
})
export class NextButton {
  @Input() isLast = false;
  @Output() next = new EventEmitter<void>();
}
