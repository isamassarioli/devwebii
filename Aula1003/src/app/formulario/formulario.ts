import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class FormularioComponent {
  nome: string = '';
  enviado: boolean = false;

  onSubmit(form: any) {
    this.enviado = true;
    if (!form.valid) return;
    // Aqui você poderia enviar os dados para um servidor
    console.log('Formulário 1 enviado:', { nome: this.nome });
  }

  onReset(form: any) {
    form.resetForm();
    this.nome = '';
    this.enviado = false;
  }
}
