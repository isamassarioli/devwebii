import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dados-pessoais.html',
  styleUrl: './dados-pessoais.css',
})
export class DadosPessoais {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controleInvalido!: (campo: string) => boolean;
}
