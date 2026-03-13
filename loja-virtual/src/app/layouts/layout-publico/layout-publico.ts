import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-layout-publico',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-publico.html',
  styleUrl: './layout-publico.css',
})
export class LayoutPublico {

}
