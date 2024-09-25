import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card} from './components/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Card],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-tracker';
}
