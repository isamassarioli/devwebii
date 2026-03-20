# 🎓 Guia de Boas Práticas - Template Driven Forms

---

## 📚 Índice

1. [O que é Template Driven Forms](#o-que-é-template-driven-forms)
2. [Estrutura Básica](#estrutura-básica)
3. [Validações](#validações)
4. [Boas Práticas](#boas-práticas)
5. [Anti-padrões (O que NÃO fazer)](#anti-padrões-o-que-não-fazer)
6. [Comparação com Reactive Forms](#comparação-com-reactive-forms)
7. [Dicas de Performance](#dicas-de-performance)

---

## O que é Template Driven Forms

**Template Driven Forms** são formulários onde a lógica está principalmente no **template HTML**, enquanto o componente TypeScript fornece apenas dados e métodos.

### Características:
- ✅ Simples de aprender
- ✅ Menos código TypeScript
- ✅ Validadores HTML5 nativos
- ✅ Ideal para formulários simples a médios
- ❌ Menos flexível para lógicas complexas
- ❌ Difícil testar automaticamente

---

## Estrutura Básica

### 1. Importar FormsModule

```typescript
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  // ...
})
export class MeuComponente { }
```

**❌ ERRADO:**
```typescript
// Esquecer de importar FormsModule
// Resultado: ngForm não funciona
@Component({
  imports: [CommonModule],
})
```

### 2. Criar Referência do Formulário

```html
<!-- ✅ CERTO -->
<form #meuForm="ngForm" (ngSubmit)="onSubmit(meuForm)">
  <!-- campos aqui -->
</form>
```

**❌ ERRADO:**
```html
<!-- Esquecer a referência -->
<form (ngSubmit)="onSubmit()">
  <!-- Sem acesso ao estado do formulário -->
</form>
```

### 3. Adicionar ngModel aos Inputs

```html
<!-- ✅ CERTO -->
<input 
  [(ngModel)]="dados.nome" 
  name="nome"
  required
  #nomeRef="ngModel"
/>
```

**❌ ERRADO:**
```html
<!-- Esquecer o name attribute -->
<input [(ngModel)]="dados.nome" required />
<!-- Resultado: ngForm não rastreia este campo -->

<!-- Ou usar ngModel sem colchetes -->
<input ngModel="dados.nome" name="nome" />
<!-- Resultado: one-way binding, não sincroniza -->
```

---

## Validações

### ✅ Validadores HTML5 Nativos

```html
<!-- Obrigatório -->
<input required />

<!-- Comprimento mínimo -->
<input minlength="3" />

<!-- Comprimento máximo -->
<input maxlength="50" />

<!-- Valor mínimo (números) -->
<input type="number" min="18" />

<!-- Valor máximo (números) -->
<input type="number" max="120" />

<!-- Padrão (regex) -->
<input pattern="[A-Z][a-z]+" />

<!-- E-mail -->
<input type="email" />

<!-- URL -->
<input type="url" />
```

### ❌ ERRADO: Validadores Não Existentes

```html
<!-- Estes NÃO funcionam -->
<input minValue="18" />          <!-- Correto: min="18" -->
<input maxValue="120" />         <!-- Correto: max="120" -->
<input maxLength="50" />         <!-- Correto: maxlength="50" -->
<input minLength="3" />          <!-- Correto: minlength="3" -->
<input isRequired />             <!-- Correto: required -->
```

### Validadores Customizados

```html
<!-- ✅ CERTO: Validação em TypeScript -->
<div *ngIf="!validarSenhasIguais()">
  As senhas não correspondem
</div>
```

```typescript
validarSenhasIguais(): boolean {
  if (!this.dados.senha || !this.dados.confirmarSenha) {
    return true; // Não validar se vazio
  }
  return this.dados.senha === this.dados.confirmarSenha;
}
```

**❌ ERRADO: Lógica no Template**
```html
<!-- Template fica ilegível -->
<div *ngIf="dados.senha !== '' && dados.confirmarSenha !== '' && dados.senha !== dados.confirmarSenha">
  As senhas não correspondem
</div>
```

### Acessar Erros de Validação

```html
<!-- ✅ CERTO: Verificar errors object -->
<div *ngIf="nomeRef.errors?.['required']">
  Nome é obrigatório
</div>

<div *ngIf="nomeRef.errors?.['minlength']">
  Nome deve ter no mínimo {{ nomeRef.errors['minlength'].requiredLength }} caracteres
</div>
```

**❌ ERRADO: Sintaxe antiga**
```html
<!-- Não funciona em versões modernas -->
<div *ngIf="nomeRef.errors?.required">
  <!-- Usa bracket notation: errors?.['required'] -->
</div>
```

---

## Boas Práticas

### 1. ✅ Sempre Validar Antes de Acessar

```typescript
// ✅ CERTO
onSubmit(form: any) {
  if (form.valid && this.validarSenhasIguais()) {
    // Processamento seguro
    console.log(this.dados);
  }
}
```

**❌ ERRADO:**
```typescript
// Assumir que o formulário é válido
onSubmit(form: any) {
  // Pode causar erros se os dados estiverem inválidos
  this.salvarDados(this.dados);
}
```

### 2. ✅ Usar Seções Semânticas

```html
<!-- ✅ CERTO: Organizar com fieldset -->
<form>
  <fieldset>
    <legend>Dados Pessoais</legend>
    <input ... />
  </fieldset>
  
  <fieldset>
    <legend>Endereço</legend>
    <input ... />
  </fieldset>
</form>
```

**❌ ERRADO:**
```html
<!-- Tudo junto sem organização -->
<form>
  <input name="nome" />
  <input name="email" />
  <input name="endereco" />
  <input name="cidade" />
</form>
```

### 3. ✅ Marcar Campos Obrigatórios Visualmente

```html
<!-- ✅ CERTO: Asterisco visual e no HTML -->
<label for="nome">Nome Completo <span class="required">*</span></label>
<input id="nome" required />
```

**❌ ERRADO:**
```html
<!-- Sem indicação visual -->
<label>Nome Completo</label>
<input required />
```

### 4. ✅ Usar Referências de Template Adequadamente

```typescript
// ✅ CERTO: Referências para controle de estado
export class MeuComponente {
  mostrarErros(campo: any): boolean {
    return (campo.touched || campo.dirty) && campo.invalid;
  }
}
```

```html
<div *ngIf="mostrarErros(nomeRef)">
  <!-- Mensagens de erro -->
</div>
```

**❌ ERRADO:**
```html
<!-- Lógica complexa no template -->
<div *ngIf="(nomeRef.touched || nomeRef.dirty) && nomeRef.invalid && nomeRef.errors && (nomeRef.errors.required || nomeRef.errors.minlength)">
  Erro no nome
</div>
```

### 5. ✅ Fazer Reset Correto

```typescript
// ✅ CERTO: Resetar tanto o form quanto o objeto
onReset(form: any) {
  form.reset(); // Reset do formulário
  this.dados = {
    nome: '',
    email: '',
    // ... todos os campos
  };
}
```

**❌ ERRADO:**
```typescript
// Apenas resetar o objeto
onReset() {
  this.dados = { nome: '', email: '' };
  // Form still dirty, campos ainda marcados como tocados
}
```

### 6. ✅ Nomes de Campos Descritivos

```html
<!-- ✅ CERTO: Nomes claros -->
<input name="nomeCompleto" />
<input name="email" />
<input name="dataNascimento" />
```

**❌ ERRADO:**
```html
<!-- Nomes genéricos -->
<input name="field1" />
<input name="field2" />
<input name="field3" />
```

### 7. ✅ Usar Type Correto em Inputs

```html
<!-- ✅ CERTO: Tipos apropriados -->
<input type="text" name="nome" />
<input type="email" name="email" />
<input type="password" name="senha" />
<input type="number" name="idade" min="18" />
<input type="tel" name="telefone" />
<input type="date" name="dataNascimento" />
```

**❌ ERRADO:**
```html
<!-- Tudo como text -->
<input type="text" name="email" />
<input type="text" name="senha" />
<input type="text" name="idade" />
```

### 8. ✅ Mensagens de Erro Claras

```html
<!-- ✅ CERTO: Mensagens específicas -->
<div *ngIf="emailRef.errors?.['required']">
  E-mail é obrigatório
</div>
<div *ngIf="emailRef.errors?.['email']">
  E-mail inválido. Use o formato: seu@email.com
</div>
```

**❌ ERRADO:**
```html
<!-- Mensagens genéricas -->
<div *ngIf="emailRef.invalid">
  Campo inválido
</div>
```

---

## Anti-padrões (O que NÃO fazer)

### ❌ Anti-padrão 1: Esquecer name Attribute

```html
<!-- Não funciona! -->
<input [(ngModel)]="dados.nome" />
```

**Solução:**
```html
<input [(ngModel)]="dados.nome" name="nome" />
```

### ❌ Anti-padrão 2: Misturar Reactive com Template Driven

```typescript
// Não faça isto!
export class MeuComponente {
  formularioForm = new FormGroup({
    nome: new FormControl('')
  });
  dados = { nome: '' };
}
```

**Solução:** Use apenas um. Para este projeto, use Template Driven.

### ❌ Anti-padrão 3: Validar Após o Envio

```typescript
// Errado - validar depois de clicar
onSubmit() {
  if (this.dados.nome === '') {
    this.erros.nome = 'Nome obrigatório';
  }
}
```

**Solução:** Validar em tempo real com HTML5

### ❌ Anti-padrão 4: Desabilitar o Botão Incorretamente

```html
<!-- Errado - nunca fica disponível -->
<button [disabled]="!form.valid && form.touched">
  Enviar
</button>
```

**Solução:**
```html
<button [disabled]="!form.valid">
  Enviar
</button>
```

---

## Comparação com Reactive Forms

| Aspecto | Template Driven | Reactive |
|---------|-----------------|----------|
| **Simplicidade** | Simples ✅ | Complexo ❌ |
| **Código HTML** | Muito | Pouco |
| **Código TypeScript** | Pouco | Muito |
| **Validações Complexas** | Difícil ❌ | Fácil ✅ |
| **Testes Automatizados** | Difícil ❌ | Fácil ✅ |
| **Dinâmico** | Limitado ❌ | Totalmente ✅ |
| **Melhor para** | Formulários simples | Formulários complexos |

### Quando usar Template Driven:
- Formulários simples (até 8-10 campos)
- Validações básicas (HTML5)
- Prototipagem rápida
- Aprendizado de Angular

### Quando usar Reactive:
- Formulários complexos
- Validações customizadas
- Padrões dinâmicos
- Testes automatizados

---

## Dicas de Performance

### 1. ✅ Usar OnPush Change Detection

```typescript
@Component({
  selector: 'app-matricula',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatriculaComponent {
  // ...
}
```

### 2. ✅ Evitar Múltiplas Validações

```typescript
// ✅ CERTO: Validação única
validarSenhasIguais(): boolean {
  return this.dados.senha === this.dados.confirmarSenha;
}
```

**❌ ERRADO:**
```html
<!-- Múltiplas validações no template -->
<div *ngIf="dados.senha !== '' && dados.confirmarSenha !== '' && dados.senha === dados.confirmarSenha">
  <div *ngIf="dados.senha !== '' && dados.confirmarSenha !== '' && dados.senha !== dados.confirmarSenha">
    <!-- Computação repetida -->
  </div>
</div>
```

### 3. ✅ Usar TrackBy em *ngFor

```html
<!-- ✅ CERTO -->
<option *ngFor="let cidade of cidades; trackBy: trackByCity" [value]="cidade">
  {{ cidade }}
</option>
```

```typescript
trackByCity(index: number, cidade: string) {
  return index;
}
```

---

## 📋 Checklist de Implementação

- [ ] FormsModule importado
- [ ] ngForm referenciado
- [ ] ngModel com name em cada input
- [ ] Referências de template para campos
- [ ] Validadores HTML5 apropriados
- [ ] Validações customizadas em TypeScript
- [ ] Mensagens de erro contextuais
- [ ] Botão desabilitado quando inválido
- [ ] Reset funciona corretamente
- [ ] Responsividade testada
- [ ] Acessibilidade validada
- [ ] Nenhum erro no console

---

## 🎯 Conclusão

Template Driven Forms são perfeitos para formulários simples e médios. Siga as boas práticas para criar formulários robustos, acessíveis e fáceis de manter.

**Regra de Ouro:** Quando o formulário fica muito complexo, considere migrar para Reactive Forms.

