import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-answer-input',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './answer-input.html',
  styleUrl: './answer-input.scss',
})
export class AnswerInput {
  @Input() disabled = false;
  @Output() submitted = new EventEmitter<string>();

  value = '';

  onSubmit(): void {
    if (this.disabled) {
      return;
    }

    this.submitted.emit(this.value);
    this.value = '';
  }
}
