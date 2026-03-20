import { Component, signal } from '@angular/core';
import { MatriculaComponent } from "./matricula/matricula";

@Component({
  selector: 'app-root',
  imports: [MatriculaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula2003');
}
