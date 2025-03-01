

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CalculatorComponent {

  constructor(){
   
}
  result = '';
  calculation = '';

  clear() {
    this.result = '';
    this.calculation = '';
  }

  backspace() {
    this.result = this.result.slice(0, -1);
  }

  calculate(value: string) {
    if (value === '=') {
      this.result = eval(this.calculation);
      // this.calculation = '';
      this.calculation = this.result;
    } else {
      this.calculation += value;
      this.result += value;
    }
  }
}
