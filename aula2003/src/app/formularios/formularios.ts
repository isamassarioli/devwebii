import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormularioData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

@Component({
  selector: 'app-formularios',
  imports: [FormsModule, CommonModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {
  formulario: FormularioData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  onSubmit() {
    console.log('Formulário enviado:', this.formulario);
    this.mensagemSucesso = 'Formulário enviado com sucesso!';
    this.mensagemErro = '';
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);
  }

  onReset() {
    this.formulario = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    };
    this.mensagemSucesso = '';
    this.mensagemErro = '';
  }
}
