import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario';
import { Formulario2Component } from './formulario2/formulario2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioComponent, Formulario2Component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aula1003');
}
