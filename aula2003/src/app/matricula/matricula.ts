import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface DadosMatricula {
  nomeCompleto: string;
  email: string;
  idade: number | null;
  senha: string;
  confirmarSenha: string;
  genero: string;
  cidade: string;
  aceitarTermos: boolean;
}

@Component({
  selector: 'app-matricula',
  imports: [FormsModule, CommonModule],
  templateUrl: './matricula.html',
  styleUrl: './matricula.css',
})
export class MatriculaComponent {
  // Interface de dados da matrícula
  dados: DadosMatricula = {
    nomeCompleto: '',
    email: '',
    idade: null,
    senha: '',
    confirmarSenha: '',
    genero: '',
    cidade: '',
    aceitarTermos: false,
  };

  // Controle de estado do formulário
  formularioEnviado: boolean = false;
  resumoDados: DadosMatricula | null = null;
  mensagemSucesso: string = '';

  // Opções de seleção
  cidades = ['Colatina', 'Marilândia', 'Linhares', 'Vitória', 'Serra', 'Outra'];
  generos = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'];

  // Validações customizadas
  validarSenhasIguais(): boolean {
    if (!this.dados.senha || !this.dados.confirmarSenha) {
      return true; // Não valida se estão vazios
    }
    return this.dados.senha === this.dados.confirmarSenha;
  }

  validarIdade(): boolean {
    if (!this.dados.idade) {
      return true; // Não valida se está vazio
    }
    return this.dados.idade >= 18;
  }

  // Handler do envio do formulário
  onSubmit(formularioRef: any) {
    this.formularioEnviado = true;

    // Validar se as senhas são iguais
    if (!this.validarSenhasIguais()) {
      return;
    }

    // Validar se a idade é válida
    if (!this.validarIdade()) {
      return;
    }

    // Se o formulário é válido e todas as validações passam
    if (formularioRef.valid && this.validarSenhasIguais() && this.validarIdade()) {
      // Copiar dados para exibição no resumo
      this.resumoDados = JSON.parse(JSON.stringify(this.dados));
      this.mensagemSucesso = 'Matrícula realizada com sucesso!';

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        this.mensagemSucesso = '';
      }, 5000);

      console.log('Dados da matrícula:', this.resumoDados);
    }
  }

  // Limpar o formulário
  onReset(formularioRef: any) {
    formularioRef.reset();
    this.dados = {
      nomeCompleto: '',
      email: '',
      idade: null,
      senha: '',
      confirmarSenha: '',
      genero: '',
      cidade: '',
      aceitarTermos: false,
    };
    this.formularioEnviado = false;
    this.resumoDados = null;
    this.mensagemSucesso = '';
  }

  // Fechar o resumo
  fecharResumo() {
    this.resumoDados = null;
  }

  // Editar a matrícula
  editarMatricula() {
    this.resumoDados = null;
    this.formularioEnviado = false;
  }
}
