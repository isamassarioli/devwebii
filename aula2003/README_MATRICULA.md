# 🎓 Ficha de Matrícula - IFES
## Sistema de Matrícula com Angular Template Driven Forms

---

## 📌 Visão Geral

Implementação completa de um formulário de matrícula para alunos do Ifes utilizando **Template Driven Forms** do Angular, com validações robustas, feedback visual em tempo real e exibição de resumo dos dados cadastrados.

---

## 🎯 Requisitos Implementados

### ✅ Campos do Formulário
- [x] Nome Completo
- [x] E-mail
- [x] Idade
- [x] Senha
- [x] Confirmar Senha
- [x] Gênero (select com 4 opções)
- [x] Cidade (select com 6 cidades do ES)
- [x] Aceite dos Termos (checkbox)

### ✅ Validações Obrigatórias
- [x] Nome: obrigatório + mínimo 3 caracteres
- [x] E-mail: obrigatório + formato válido
- [x] Idade: obrigatória + mínimo 18 anos
- [x] Senha: obrigatória + mínimo 6 caracteres
- [x] Confirmar senha: obrigatória + igual à senha
- [x] Gênero: obrigatório
- [x] Cidade: obrigatória
- [x] Termos: obrigatório

### ✅ Mensagens de Erro
- [x] Aparecem apenas quando tocado/alterado E inválido
- [x] Mensagens específicas por tipo de erro
- [x] Com ícones visuais (⚠️)

### ✅ Botão Cadastrar
- [x] Desabilitado enquanto formulário inválido
- [x] Desabilitado se senhas não correspondem
- [x] Desabilitado se idade < 18

### ✅ Exibição de Dados
- [x] Resumo modal após envio válido
- [x] Opção de editar formulário
- [x] Opção de confirmar matrícula

### ✅ Interface e Design
- [x] Profissional e atraente
- [x] Responsivo (mobile, tablet, desktop)
- [x] Acessível
- [x] Animações suaves

---

## 📂 Estrutura de Arquivos

```
src/app/
├── matricula/
│   ├── matricula.ts               # Componente com lógica
│   ├── matricula.html             # Template do formulário
│   └── matricula.css              # Estilos
├── app.ts                         # Componente raiz
├── app.html                       # Template raiz
└── app.css                        # Estilos globais
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Angular CLI instalado
- Um navegador moderno

### Passos

1. **Navegue para o diretório do projeto:**
   ```bash
   cd aula2003
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```

4. **Abra o navegador:**
   ```
   http://localhost:4200
   ```

---

## 🔧 Componentes e Lógica

### **MatriculaComponent** (`matricula.ts`)

#### Propriedades Principais:

```typescript
// Dados do formulário
dados: DadosMatricula = {
  nomeCompleto: '',
  email: '',
  idade: null,
  senha: '',
  confirmarSenha: '',
  genero: '',
  cidade: '',
  aceitarTermos: false
}

// Opções de seleção
cidades = ['Colatina', 'Marilândia', 'Linhares', 'Vitória', 'Serra', 'Outra']
generos = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar']
```

#### Métodos Principais:

1. **`validarSenhasIguais()`**
   - Validação customizada
   - Verifica se senha e confirmar senha são iguais
   - Retorna `boolean`

2. **`validarIdade()`**
   - Validação customizada
   - Verifica se idade >= 18
   - Retorna `boolean`

3. **`onSubmit(formularioRef)`**
   - Valida o formulário completo
   - Mostra resumo dos dados
   - Exibe mensagem de sucesso

4. **`onReset(formularioRef)`**
   - Limpa todos os campos
   - Reseta estado do formulário
   - Remove mensagens

5. **`fecharResumo()`**
   - Fecha o modal de resumo

6. **`editarMatricula()`**
   - Volta para edição do formulário

---

## 📋 Template Driven Forms - Detalhes

### **1. Diretiva ngForm**
```html
<form #matriculaForm="ngForm" (ngSubmit)="onSubmit(matriculaForm)">
```
- Cria uma instância de FormGroup
- Rastreia estado geral do formulário
- Acesso via template reference

### **2. Diretiva ngModel**
```html
<input [(ngModel)]="dados.nomeCompleto" name="nomeCompleto" />
```
- Two-way binding (sincronização automática)
- O atributo `name` é **obrigatório**
- Rastreia estado individual do campo

### **3. Template References**
```html
<input #nomeRef="ngModel" />
```
- Permite acessar estado do campo no template
- Propriedades: `valid`, `invalid`, `touched`, `dirty`, `errors`

### **4. Validadores Nativos**
```html
<input required minlength="3" email min="18" />
```
- HTML5 validators
- Preenchem o objeto `errors` automaticamente

### **5. Validadores Customizados**
```html
<div *ngIf="!validarSenhasIguais()">
  As senhas não correspondem
</div>
```
- Lógica em TypeScript
- Usados para validações complexas

---

## 🎨 Estilos e Design

### Cores Principais
- **Primária:** #0366d6 (Azul)
- **Sucesso:** #28a745 (Verde)
- **Erro:** #dc3545 (Vermelho)
- **Aviso:** #ffc107 (Amarelo)

### Responsividade

#### Desktop (1024px+)
```css
.form-wrapper {
  max-width: 900px;
  padding: 30px;
}
```

#### Tablet (768px - 1023px)
```css
/* Ajustes de espaçamento */
.form-wrapper {
  padding: 20px;
}
```

#### Mobile (< 768px)
```css
/* Stack vertical */
.form-actions {
  flex-direction: column;
}
```

### Animações

1. **slideDown** - Header
2. **slideUp** - Formulário, modal
3. **shake** - Mensagens de erro
4. **fadeIn** - Modal de fundo

---

## 📱 Exemplos de Uso

### Preencher com Dados Válidos
1. Nome: "João Silva da Cruz"
2. E-mail: "joao@ifes.edu.br"
3. Idade: 22
4. Gênero: "Masculino"
5. Cidade: "Vitória"
6. Senha: "Senha123!"
7. Confirmar: "Senha123!"
8. Termos: ✓

**Resultado:** Formulário aceito, resumo exibido

### Tentar Enviar Inválido
1. Preencher nome com "ab" (< 3 caracteres)
2. Clicar em outro campo

**Resultado:** "Nome deve ter no mínimo 3 caracteres"

### Senhas Diferentes
1. Senha: "Senha123!"
2. Confirmar: "Senha456"
3. Clicar "Cadastrar"

**Resultado:** "As senhas não correspondem"

---

## 🔍 Debug

### Status do Formulário
Na parte inferior do formulário existe uma seção expandível com informações de debug:
- Formulário válido: Sim/Não
- Tocado: Sim/Não
- Sujo: Sim/Não
- Senhas iguais: Sim/Não
- Idade válida: Sim/Não

---

## 📦 Dependências

```json
{
  "dependencies": {
    "@angular/animations": "^18.0.0",
    "@angular/common": "^18.0.0",
    "@angular/compiler": "^18.0.0",
    "@angular/core": "^18.0.0",
    "@angular/forms": "^18.0.0",
    "@angular/platform-browser": "^18.0.0",
    "@angular/platform-browser-dynamic": "^18.0.0",
    "rxjs": "^7.8.0",
    "tslib": "^2.6.0",
    "zone.js": "^0.14.2"
  }
}
```

---

## 🎓 Conceitos Aprendidos

1. **Template Driven Forms vs Reactive Forms**
   - Quando usar Template Driven
   - Validações no template

2. **Two-Way Binding**
   - `[(ngModel)]` = syntactic sugar
   - Property binding + event binding

3. **Validação em Angular**
   - Validadores nativos
   - Validadores customizados
   - Estados dos campos

4. **Feedback de Usuário**
   - Mensagens de erro contextuais
   - Desabilitação inteligente
   - Animações suaves

5. **Acessibilidade**
   - Labels associadas
   - Navegação por teclado
   - Contraste adequado

---

## 🐛 Troubleshooting

### Porta 4200 já está em uso
```bash
ng serve --port 4201
```

### Compilação lenta
```bash
ng serve --poll
```

### Cache não atualiza
```bash
Ctrl+Shift+Delete (limpar cache do navegador)
```

---

## 📞 Suporte

Para dúvidas sobre a implementação, verifique:
- `/ATIVIDADE_MATRICULA.md` - Documentação completa
- `/FORMULARIO_NGFORM.md` - Guia de Template Driven Forms
- Console do navegador (F12) para mensagens de erro

---

## ✨ Melhorias Futuras

- [ ] Integração com backend
- [ ] Autenticação de usuário
- [ ] Envio de e-mail de confirmação
- [ ] Salvar rascunho (localStorage)
- [ ] Temas (dark mode)
- [ ] Múltiplos idiomas (i18n)
- [ ] Validação de CPF
- [ ] Upload de documentos

---

## 📄 Licença

Projeto educacional para disciplina de Desenvolvimento Web II - IFES

---

**Desenvolvido com ❤️ usando Angular**

