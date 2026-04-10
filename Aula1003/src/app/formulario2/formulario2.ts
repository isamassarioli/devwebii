
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario2.html',
  styleUrl: './formulario2.css',
})
export class Formulario2Component {
  nome: string = '';
  logradouro: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
  } = { rua: '', numero: '', bairro: '', cidade: '' };

  enviado: boolean = false;

  onSubmit(form: any) {
    this.enviado = true;
    if (!form.valid) return;
    console.log('Formulário 2 enviado:', { nome: this.nome, logradouro: this.logradouro });
  }

  onReset(form: any) {
    form.resetForm();
    this.nome = '';
    this.logradouro = { rua: '', numero: '', bairro: '', cidade: '' };
    this.enviado = false;
  }
}
