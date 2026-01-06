import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hint-panel',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './hint-panel.html',
  styleUrl: './hint-panel.scss',
})
export class HintPanel {
  @Input() visible = false;
  @Input() hintText = '';
}
