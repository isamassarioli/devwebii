# 🎓 Ficha de Matrícula - IFES
## Atividade Prática: Formulários com Template Driven Forms

---

## 📋 Enunciado da Atividade

Criar um projeto no Angular que apresente um formulário de **Ficha de Matrícula para os alunos do Ifes**, com os seguintes campos:

- ✅ Nome completo
- ✅ E-mail
- ✅ Idade
- ✅ Senha
- ✅ Confirmar senha
- ✅ Gênero
- ✅ Cidade (Colatina, Marilândia, Linhares, Vitória, Serra, Outra)
- ✅ Aceite dos termos

O formulário deve ser feito com **Template Driven Forms** com validações obrigatórias.

---

## ✨ Implementação Realizada

### 1. **Estrutura do Projeto**

```
src/app/
├── matricula/
│   ├── matricula.ts          # Lógica do componente
│   ├── matricula.html        # Template do formulário
│   └── matricula.css         # Estilos
├── app.ts                    # Componente raiz
├── app.html                  # Template raiz
└── app.css                   # Estilos globais
```

### 2. **Validações Implementadas** ✔️

Todas as validações obrigatórias foram implementadas:

#### **Nome Completo**
- Obrigatório
- Mínimo de 3 caracteres
- Mensagem: "Nome é obrigatório" e "Nome deve ter no mínimo 3 caracteres"

#### **E-mail**
- Obrigatório
- Formato válido de email
- Mensagem: "E-mail é obrigatório" e "E-mail inválido"

#### **Idade**
- Obrigatório
- Mínimo de 18 anos
- Mensagem: "Idade é obrigatória" e "A idade mínima é 18 anos"

#### **Senha**
- Obrigatório
- Mínimo de 6 caracteres
- Mensagem: "Senha é obrigatória" e "Senha deve ter no mínimo 6 caracteres"

#### **Confirmar Senha**
- Obrigatório
- Deve ser igual à senha
- Validação customizada em TypeScript
- Mensagem: "As senhas não correspondem"

#### **Gênero**
- Obrigatório
- Opções: Masculino, Feminino, Outro, Prefiro não informar
- Mensagem: "Gênero é obrigatório"

#### **Cidade**
- Obrigatório
- Opções: Colatina, Marilândia, Linhares, Vitória, Serra, Outra
- Mensagem: "Cidade é obrigatória"

#### **Aceite dos Termos**
- Obrigatório
- Mensagem: "Você deve aceitar os termos e condições"

### 3. **Template Driven Forms - Características**

#### **ngForm**
```html
<form #matriculaForm="ngForm" (ngSubmit)="onSubmit(matriculaForm)">
```
- Referência do formulário para controlar estado geral
- Acesso a propriedades como `valid`, `touched`, `dirty`

#### **ngModel com Two-Way Binding**
```html
<input [(ngModel)]="dados.nomeCompleto" name="nomeCompleto" />
```
- Vinculação bidirecional de dados
- Sincronização automática entre template e componente
- Atributo `name` obrigatório para ngForm funcionar

#### **Referências de Template**
```html
<input #nomeRef="ngModel" />
<div *ngIf="nomeRef.touched && nomeRef.invalid">
```
- Cada campo tem sua própria referência
- Acesso a: `valid`, `invalid`, `touched`, `dirty`, `errors`

#### **Validadores HTML5**
- `required` - Campo obrigatório
- `minlength` - Comprimento mínimo
- `min` - Valor mínimo (para números)
- `email` - Formato de email
- Mensagens de erro específicas para cada validador

### 4. **Mensagens de Erro Contextuais** 💬

As mensagens aparecem APENAS quando:
1. O campo foi **tocado** (`touched`) OU
2. O campo foi **alterado** (`dirty`)
3. **E** o campo está **inválido** (`invalid`)

Exemplo:
```html
<div *ngIf="(nomeRef.touched || nomeRef.dirty) && nomeRef.invalid">
  <span *ngIf="nomeRef.errors?.['required']">Nome é obrigatório</span>
  <span *ngIf="nomeRef.errors?.['minlength']">Nome deve ter no mínimo 3 caracteres</span>
</div>
```

### 5. **Desabilitação do Botão** 🔒

O botão "Cadastrar" fica desabilitado enquanto:
- O formulário não está válido
- As senhas não correspondem
- A idade é menor que 18

```html
<button type="submit" [disabled]="!validarSenhasIguais() || !validarIdade()">
  Cadastrar
</button>
```

### 6. **Exibição dos Dados** 📊

Após envio válido, um **resumo modal** é exibido com:
- Todos os dados preenchidos
- Formatação clara
- Botões para "Editar" ou "Confirmar"

Exemplo dos dados exibidos:
```
Nome Completo: João Silva
E-mail: joao@email.com
Idade: 25 anos
Gênero: Masculino
Cidade: Vitória
Termos Aceitos: ✓ Sim
```

---

## 🎨 Interface e Design

### **Características Visuais**

✅ **Header Profissional**
- Logo do IFES
- Gradiente atraente
- Tipografia clara

✅ **Organização em Seções**
- Dados Pessoais
- Endereço
- Credenciais de Acesso
- Aceite de Termos

✅ **Feedback Visual**
- Bordas coloridas (verde = válido, vermelho = inválido)
- Animações suaves
- Ícones nas mensagens de erro
- Status visual do formulário

✅ **Responsividade**
- Desktop (até 900px)
- Tablet (até 768px)
- Mobile (até 480px)
- Adaptação automática de layouts

✅ **Acessibilidade**
- Labels associadas aos inputs
- Atributos `for` e `id` corretos
- Navegação por teclado
- Contraste de cores adequado

---

## 📝 Código Completo - Estrutura

### **TypeScript (matricula.ts)**

```typescript
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
  // Dados do formulário
  dados: DadosMatricula = { /* ... */ };

  // Validações customizadas
  validarSenhasIguais(): boolean {
    return this.dados.senha === this.dados.confirmarSenha;
  }

  validarIdade(): boolean {
    return this.dados.idade !== null && this.dados.idade >= 18;
  }

  // Handlers
  onSubmit(formularioRef: any) { /* ... */ }
  onReset(formularioRef: any) { /* ... */ }
}
```

### **HTML (matricula.html) - Exemplo de Campo**

```html
<div class="form-group">
  <label for="nomeCompleto" class="label-required">Nome Completo *</label>
  <input
    id="nomeCompleto"
    name="nomeCompleto"
    type="text"
    [(ngModel)]="dados.nomeCompleto"
    required
    minlength="3"
    placeholder="Digite seu nome completo"
    #nomeRef="ngModel"
    class="form-control"
  />
  <div *ngIf="(nomeRef.touched || nomeRef.dirty) && nomeRef.invalid" class="error-message">
    <span *ngIf="nomeRef.errors?.['required']">⚠️ Nome é obrigatório</span>
    <span *ngIf="nomeRef.errors?.['minlength']">⚠️ Nome deve ter no mínimo 3 caracteres</span>
  </div>
</div>
```

---

## 🔧 Tecnologias Utilizadas

- **Angular** - Framework
- **FormsModule** - Para Template Driven Forms
- **CommonModule** - Diretivas Angular (*ngIf, *ngFor)
- **TypeScript** - Linguagem
- **CSS3** - Estilos e animações
- **HTML5** - Markup semântico

---

## 📚 Conceitos-Chave do Template Driven Forms

### **1. ngForm**
Diretiva que cria uma instância de FormGroup para controlar o formulário inteiro.

### **2. ngModel**
Vincula propriedades do componente aos valores dos inputs (two-way binding).

### **3. Template References**
`#nomeRef="ngModel"` cria uma variável de template para acessar o estado do campo.

### **4. Validadores**
- Validadores HTML5 nativos: `required`, `minlength`, `email`, `min`
- Validações customizadas em TypeScript

### **5. Estados dos Campos**
- `valid` / `invalid` - Validação
- `touched` / `untouched` - Interação do usuário
- `dirty` / `pristine` - Modificação
- `errors` - Objeto com erros

---

## 🚀 Como Usar

1. **Preencher o formulário** com os dados pessoais
2. **Validações aparecem** conforme você interage com os campos
3. **Botão fica habilitado** quando tudo está válido
4. **Ao clicar "Cadastrar"**, um resumo é exibido
5. **Editar** volta para o formulário ou **Confirmar** finaliza

---

## ✅ Checklist de Requisitos

- [x] Nome obrigatório, mínimo 3 caracteres
- [x] E-mail obrigatório e válido
- [x] Idade obrigatória e >= 18
- [x] Senha obrigatória, mínimo 6 caracteres
- [x] Confirmar senha obrigatória e igual
- [x] Gênero obrigatório
- [x] Cidade obrigatória
- [x] Aceite dos termos obrigatório
- [x] Mensagens de erro contextuais
- [x] Botão desabilitado enquanto inválido
- [x] Exibição de resumo após envio
- [x] Interface profissional e responsiva
- [x] Uso de Template Driven Forms

---

## 📱 Responsividade

- **Desktop:** Layout em colunas, todos os elementos visíveis
- **Tablet:** Ajustes de espaçamento e tamanhos
- **Mobile:** Stack vertical, fontes ajustadas, touch-friendly

---

## 🎯 Conclusão

Esta atividade demonstra o domínio completo de:
- ✨ Template Driven Forms em Angular
- 📝 Validações HTML5 e customizadas
- 💬 Feedback de erros contextuais
- 🎨 Design responsivo e acessível
- ⚙️ Lógica de negócio (senhas iguais, idade mínima)
- 📊 Exibição de dados após envio

