import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato-cidade',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato-cidade.html',
  styleUrl: './contato-cidade.css',
})
export class ContatoCidade {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) telefones!: FormArray<FormControl<string | null>>;
  @Input({ required: true }) cidades!: string[];
  @Input({ required: true }) adicionarTelefone!: () => void;
  @Input({ required: true }) removerTelefone!: (index: number) => void;
  @Input({ required: true }) telefoneInvalido!: (index: number) => boolean;
  @Input({ required: true }) controleInvalido!: (campo: string) => boolean;
}
