# Formulário com Validação (ngForm)

Este é um exemplo completo de um formulário com validação em Angular usando `ngForm` e `ngModel`.

## Características

### 1. **ngForm - Referência do Formulário**
```html
<form #formularioRef="ngForm" (ngSubmit)="onSubmit()">
```
- `#formularioRef="ngForm"` cria uma referência ao formulário
- Permite acessar propriedades como `formularioRef.valid`, `formularioRef.dirty`, `formularioRef.touched`, etc.

### 2. **ngModel - Two-Way Data Binding**
```html
<input [(ngModel)]="formulario.nome" name="nome" />
```
- `[(ngModel)]` vincula o valor do input ao componente em tempo real
- `name` atributo é **obrigatório** para que o ngForm funcione corretamente

### 3. **Validação de Campos**
Cada campo tem sua própria referência e validadores:

#### Nome
- `required` - Campo obrigatório
- `minlength="3"` - Mínimo de 3 caracteres

#### Email
- `required` - Campo obrigatório
- `email` - Validação de formato de email

#### Telefone (Opcional)
- `pattern` - Validação com expressão regular

#### Mensagem
- `required` - Campo obrigatório
- `minlength="10"` - Mínimo de 10 caracteres
- `maxlength="500"` - Máximo de 500 caracteres

### 4. **Mensagens de Erro Contextuais**
```html
<div *ngIf="nomeInput.touched && nomeInput.invalid" class="error-message">
  <span *ngIf="nomeInput.errors?.['required']">Nome é obrigatório</span>
  <span *ngIf="nomeInput.errors?.['minlength']">Nome deve ter pelo menos 3 caracteres</span>
</div>
```
- Mensagens aparecem apenas quando o campo foi tocado (`touched`) E é inválido
- Cada tipo de erro mostra uma mensagem específica

### 5. **Status do Formulário**
```html
<span [ngClass]="formularioRef.valid ? 'status-valid' : 'status-invalid'">
  {{ formularioRef.valid ? '✓ Formulário válido' : '✗ Formulário inválido' }}
</span>
```
- Mostra em tempo real se o formulário está válido ou não

### 6. **Desabilitação do Botão Submit**
```html
<button type="submit" [disabled]="!formularioRef.valid">
  Enviar Formulário
</button>
```
- O botão fica desabilitado enquanto o formulário não estiver completamente válido

## Estrutura do Componente

### TypeScript (`formularios.ts`)
```typescript
export class Formularios {
  formulario: FormularioData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  onSubmit() {
    // Lógica ao enviar o formulário
  }

  onReset() {
    // Limpa o formulário
  }
}
```

## Como Usar

1. O `FormsModule` deve estar importado no componente
2. Use `ngForm` na tag `<form>`
3. Adicione `ngModel` com `name` em cada campo
4. Crie referências de template para acessar estados dos campos
5. Use `*ngIf` para mostrar mensagens de erro condicionalmente

## Propriedades Úteis do FormControl

- `valid` - Campo é válido?
- `invalid` - Campo é inválido?
- `touched` - Campo foi tocado pelo usuário?
- `untouched` - Campo não foi tocado?
- `dirty` - Campo foi modificado?
- `pristine` - Campo não foi modificado?
- `errors` - Objeto com erros de validação
- `value` - Valor atual do campo

## Validadores Disponíveis

- `required` - Campo obrigatório
- `minlength` - Comprimento mínimo
- `maxlength` - Comprimento máximo
- `pattern` - Expressão regular
- `email` - Validação de email
- `min` - Valor mínimo (números)
- `max` - Valor máximo (números)

