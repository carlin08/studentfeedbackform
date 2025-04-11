import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentfeedbackComponent } from './studentfeedback/studentfeedback.component';


@Component({
  selector: 'app-root',
  imports: [StudentfeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feedback';
}
