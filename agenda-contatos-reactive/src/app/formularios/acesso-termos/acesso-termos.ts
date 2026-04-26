import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-acesso-termos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './acesso-termos.html',
  styleUrl: './acesso-termos.css',
})
export class AcessoTermos {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controleInvalido!: (campo: string) => boolean;
  @Input({ required: true }) erroSenhasDiferentes!: () => boolean;
}
