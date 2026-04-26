import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  private readonly formBuilder = inject(FormBuilder);

  readonly contatoForm = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  readonly edicaoForm = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  contatos: Contato[] = [];
  editandoId: number | null = null;
  private proximoId = 1;

  campoInvalido(campo: 'nome' | 'telefone' | 'email'): boolean {
    const control = this.contatoForm.controls[campo];
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  campoEdicaoInvalido(campo: 'nome' | 'telefone' | 'email'): boolean {
    const control = this.edicaoForm.controls[campo];
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  inserirContato(): void {
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    const valor = this.contatoForm.getRawValue();
    this.contatos = [
      {
        id: this.proximoId++,
        nome: valor.nome.trim(),
        telefone: valor.telefone.trim(),
        email: valor.email.trim()
      },
      ...this.contatos
    ];

    this.contatoForm.reset({ nome: '', telefone: '', email: '' });
  }

  excluirContato(id: number): void {
    const confirmar = window.confirm('Tem certeza que deseja excluir este contato?');
    if (!confirmar) {
      return;
    }

    this.contatos = this.contatos.filter((contato) => contato.id !== id);

    if (this.editandoId === id) {
      this.cancelarEdicao();
    }
  }

  iniciarEdicao(contato: Contato): void {
    this.editandoId = contato.id;
    this.edicaoForm.reset({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email
    });
  }

  cancelarEdicao(): void {
    this.editandoId = null;
    this.edicaoForm.reset({ nome: '', telefone: '', email: '' });
  }

  salvarEdicao(id: number): void {
    if (this.edicaoForm.invalid) {
      this.edicaoForm.markAllAsTouched();
      return;
    }

    const valor = this.edicaoForm.getRawValue();

    this.contatos = this.contatos.map((contato) => {
      if (contato.id !== id) {
        return contato;
      }

      return {
        ...contato,
        nome: valor.nome.trim(),
        telefone: valor.telefone.trim(),
        email: valor.email.trim()
      };
    });

    this.cancelarEdicao();
  }

  estaEditando(id: number): boolean {
    return this.editandoId === id;
  }

  trackPorId(_: number, contato: Contato): number {
    return contato.id;
  }
}
