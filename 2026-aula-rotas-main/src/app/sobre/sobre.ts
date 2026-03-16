import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})



export class Sobre {
  constructor(private route: ActivatedRoute, private router: Router) { }

    irParaHome() {
        this.router.navigate(['/home']);
    }

} 