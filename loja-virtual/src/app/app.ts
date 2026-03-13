import { Component, signal } from '@angular/core';
import { LayoutPublico } from "./layouts/layout-publico/layout-publico";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-virtual');
}
