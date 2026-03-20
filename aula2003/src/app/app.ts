import { Component, signal } from '@angular/core';
import { Formularios } from "./formularios/formularios";

@Component({
  selector: 'app-root',
  imports: [Formularios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula2003');
}
