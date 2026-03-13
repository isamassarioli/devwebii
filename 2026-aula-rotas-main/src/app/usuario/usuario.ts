import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  irParaHome() {
    
    this.router.navigate(['/home']);
    
  }

}
