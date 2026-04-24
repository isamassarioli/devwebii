import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { AcessoTermos } from './formularios/acesso-termos/acesso-termos';
import { ContatoCidade } from './formularios/contato-cidade/contato-cidade';
import { DadosPessoais } from './formularios/dados-pessoais/dados-pessoais';

interface MatriculaResumo {
  nomeCompleto: string;
  email: string;
  telefones: string[];
  idade: number;
  genero: string;
  cidade: string;
  aceitouTermos: boolean;
}

type AbaFormulario = 'dados' | 'contato' | 'acesso';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, DadosPessoais, ContatoCidade, AcessoTermos],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  private readonly formBuilder = inject(FormBuilder);

  readonly cidades = ['Colatina', 'Marilandia', 'Linhares', 'Vitoria', 'Serra', 'Outra'];
  readonly abas: Array<{ id: AbaFormulario; titulo: string }> = [
    { id: 'dados', titulo: 'Dados pessoais' },
    { id: 'contato', titulo: 'Contato e cidade' },
    { id: 'acesso', titulo: 'Credenciais e termos' }
  ];
  abaAtual: AbaFormulario = 'dados';

  readonly matriculaForm = this.formBuilder.group(
    {
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefones: this.formBuilder.array([this.criarTelefoneControl()], Validators.minLength(1)),
      idade: [null as number | null, [Validators.required, Validators.min(18)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      aceitouTermos: [false, [Validators.requiredTrue]]
    },
    { validators: this.senhasIguaisValidator() }
  );

  resumoEnviado: MatriculaResumo | null = null;

  get telefones(): FormArray<FormControl<string | null>> {
    return this.matriculaForm.controls.telefones;
  }

  adicionarTelefone(): void {
    this.telefones.push(this.criarTelefoneControl());
  }

  removerTelefone(index: number): void {
    if (this.telefones.length > 1) {
      this.telefones.removeAt(index);
    }
  }

  controleInvalido(campo: string): boolean {
    const control = this.matriculaForm.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  telefoneInvalido(index: number): boolean {
    const control = this.telefones.at(index);
    return control.invalid && (control.touched || control.dirty);
  }

  erroSenhasDiferentes(): boolean {
    return (
      this.matriculaForm.hasError('senhasDiferentes') &&
      (this.matriculaForm.controls.confirmarSenha.touched || this.matriculaForm.controls.confirmarSenha.dirty)
    );
  }

  selecionarAba(aba: AbaFormulario): void {
    this.abaAtual = aba;
  }

  enviar(): void {
    if (this.matriculaForm.invalid) {
      this.matriculaForm.markAllAsTouched();
      return;
    }

    const valor = this.matriculaForm.getRawValue();

    this.resumoEnviado = {
      nomeCompleto: valor.nomeCompleto ?? '',
      email: valor.email ?? '',
      telefones: (valor.telefones ?? []).filter((telefone): telefone is string => !!telefone?.trim()),
      idade: Number(valor.idade),
      genero: valor.genero ?? '',
      cidade: valor.cidade ?? '',
      aceitouTermos: !!valor.aceitouTermos
    };

    this.matriculaForm.reset({
      nomeCompleto: '',
      email: '',
      telefones: [],
      idade: null,
      senha: '',
      confirmarSenha: '',
      genero: '',
      cidade: '',
      aceitouTermos: false
    });

    this.telefones.clear();
    this.adicionarTelefone();
  }

  private criarTelefoneControl(): FormControl<string | null> {
    return this.formBuilder.control('', [Validators.required]);
  }

  private senhasIguaisValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const senha = formGroup.get('senha')?.value;
      const confirmarSenha = formGroup.get('confirmarSenha')?.value;

      if (!senha || !confirmarSenha) {
        return null;
      }

      return senha === confirmarSenha ? null : { senhasDiferentes: true };
    };
  }
}
