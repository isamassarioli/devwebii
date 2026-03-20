# 🚀 Quick Reference - Ficha de Matrícula

---

## 📋 Acesso Rápido

| Recurso | Localização |
|---------|------------|
| **Código Fonte** | `src/app/matricula/` |
| **Componente** | `matricula.ts` |
| **Template** | `matricula.html` |
| **Estilos** | `matricula.css` |
| **Documentação Completa** | `ATIVIDADE_MATRICULA.md` |
| **Como Usar** | `README_MATRICULA.md` |
| **Boas Práticas** | `BOAS_PRATICAS_FORMS.md` |
| **Testes** | `TESTES_MATRICULA.md` |
| **Resumo** | `RESUMO_FINAL.md` |

---

## ⚡ Inicio Rápido

```bash
# 1. Entrar na pasta
cd aula2003

# 2. Iniciar servidor
ng serve --port 4201

# 3. Abrir navegador
http://localhost:4201
```

---

## 🧩 Estrutura Rápida do Componente

### Imports Obrigatórios
```typescript
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
})
```

### Propriedades Principais
```typescript
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

cidades = ['Colatina', 'Marilândia', 'Linhares', 'Vitória', 'Serra', 'Outra'];
generos = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'];
```

### Métodos Principais
```typescript
validarSenhasIguais(): boolean { ... }
validarIdade(): boolean { ... }
onSubmit(form: any): void { ... }
onReset(form: any): void { ... }
fecharResumo(): void { ... }
editarMatricula(): void { ... }
```

---

## 📝 Validadores em Uso

### HTML5 Validators
```html
<input required />              <!-- Obrigatório -->
<input minlength="3" />         <!-- Mínimo 3 caracteres -->
<input type="email" />          <!-- Formato email -->
<input type="number" min="18"/> <!-- Mínimo 18 -->
```

### Validadores Customizados
```typescript
validarSenhasIguais()  // Senhas iguais
validarIdade()         // Idade >= 18
```

---

## 🔍 Referências de Template

### Acessar Erros
```html
<div *ngIf="nomeRef.errors?.['required']">
  Nome é obrigatório
</div>

<div *ngIf="nomeRef.errors?.['minlength']">
  Mínimo 3 caracteres
</div>
```

### Verificar Estados
```html
<!-- Tocado -->
<div *ngIf="nomeRef.touched">...</div>

<!-- Alterado -->
<div *ngIf="nomeRef.dirty">...</div>

<!-- Válido/Inválido -->
<div *ngIf="nomeRef.valid">✓ OK</div>
<div *ngIf="nomeRef.invalid">✗ Erro</div>
```

---

## 🎯 Campos do Formulário

| Campo | Tipo | Validação | Obrigatório |
|-------|------|-----------|-------------|
| Nome Completo | text | minlength:3 | Sim ✅ |
| E-mail | email | email | Sim ✅ |
| Idade | number | min:18 | Sim ✅ |
| Senha | password | minlength:6 | Sim ✅ |
| Confirmar Senha | password | equals senha | Sim ✅ |
| Gênero | select | required | Sim ✅ |
| Cidade | select | required | Sim ✅ |
| Termos | checkbox | required | Sim ✅ |

---

## 🎨 Classes CSS Principais

```css
.container          /* Container principal */
.header            /* Header com logo */
.formulario        /* Wrapper do formulário */
.form-group        /* Grupo de campo */
.form-control      /* Input/Select/Textarea */
.error-message     /* Mensagem de erro */
.alert-success     /* Alerta de sucesso */
.resumo-container  /* Modal de resumo */
.btn               /* Botão padrão */
.btn-primary       /* Botão primário (azul) */
.btn-secondary     /* Botão secundário (cinza) */
```

---

## 🌐 Responsividade

```css
/* Desktop */
.form-wrapper {
  max-width: 900px;
  padding: 30px;
}

/* Tablet */
@media (max-width: 768px) {
  .form-wrapper { padding: 20px; }
}

/* Mobile */
@media (max-width: 480px) {
  .form-wrapper { padding: 15px; }
  .form-actions { flex-direction: column; }
}
```

---

## ⚙️ Configuração Angular

### angular.json
```json
{
  "projects": {
    "aula2003": {
      "projectType": "application"
      // ...
    }
  }
}
```

### package.json
```json
{
  "name": "aula2003",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build"
  }
}
```

---

## 🔧 Comandos Úteis

```bash
# Iniciar servidor
ng serve

# Iniciar em porta específica
ng serve --port 4201

# Build para produção
ng build --configuration production

# Executar testes
ng test

# Lint do código
ng lint
```

---

## 📊 Campos por Seção

### 📋 Dados Pessoais
- Nome Completo
- E-mail
- Idade
- Gênero

### 🏠 Endereço
- Cidade

### 🔐 Credenciais
- Senha
- Confirmar Senha

### ✅ Termos
- Aceite dos Termos

---

## 💾 Dados Capturados

```json
{
  "nomeCompleto": "João Silva",
  "email": "joao@ifes.edu.br",
  "idade": 22,
  "senha": "Senha@123",
  "confirmarSenha": "Senha@123",
  "genero": "Masculino",
  "cidade": "Vitória",
  "aceitarTermos": true
}
```

---

## ❌ Erros Comuns

### Erro: ngForm não funciona
```typescript
// ❌ ERRADO
imports: [CommonModule]

// ✅ CERTO
imports: [FormsModule, CommonModule]
```

### Erro: ngModel não sincroniza
```html
<!-- ❌ ERRADO -->
<input [(ngModel)]="dados.nome" />

<!-- ✅ CERTO -->
<input [(ngModel)]="dados.nome" name="nome" />
```

### Erro: Botão sempre desabilitado
```html
<!-- ❌ ERRADO -->
<button [disabled]="!form.valid && form.touched">

<!-- ✅ CERTO -->
<button [disabled]="!form.valid">
```

---

## 📱 Testes Rápidos

### Validar Nome
- [ ] Deixar vazio → Ver erro
- [ ] Digitar "ab" → Ver erro
- [ ] Digitar "João" → Sem erro

### Validar E-mail
- [ ] Deixar vazio → Ver erro
- [ ] Digitar "email" → Ver erro
- [ ] Digitar "email@test.com" → Sem erro

### Validar Idade
- [ ] Deixar vazio → Ver erro
- [ ] Digitar "17" → Ver erro
- [ ] Digitar "25" → Sem erro

### Validar Senhas
- [ ] Diferentes → Ver erro
- [ ] Iguais → Sem erro

### Testar Botão
- [ ] Formulário vazio → Desabilitado
- [ ] Preenchido corretamente → Habilitado
- [ ] Clicar → Ver resumo

---

## 🎓 Dicas de Estudo

1. **Entender ngForm**
   - Lê: `BOAS_PRATICAS_FORMS.md` (seção ngForm)

2. **Entender ngModel**
   - Lê: `BOAS_PRATICAS_FORMS.md` (seção ngModel)

3. **Entender Validações**
   - Lê: `ATIVIDADE_MATRICULA.md` (seção Validações)

4. **Entender CSS Responsivo**
   - Lê: `matricula.css` (seção @media)

5. **Ver Exemplos de Teste**
   - Lê: `TESTES_MATRICULA.md`

---

## 🔗 Arquivos Relacionados

```
Projeto/
├── src/app/matricula/
│   ├── matricula.ts      ← Lógica
│   ├── matricula.html    ← Template
│   └── matricula.css     ← Estilos
│
├── ATIVIDADE_MATRICULA.md    ← Documentação
├── README_MATRICULA.md        ← Como usar
├── BOAS_PRATICAS_FORMS.md     ← Conceitos
├── TESTES_MATRICULA.md        ← Testes
├── FORMULARIO_NGFORM.md       ← Guia anterior
├── RESUMO_FINAL.md            ← Resumo
└── QUICK_REFERENCE.md         ← Este arquivo
```

---

## 🎯 Checklist de Funcionalidades

- [x] Formulário com 8 campos
- [x] Todas as validações ativas
- [x] Mensagens de erro contextuais
- [x] Botão desabilitado quando inválido
- [x] Resumo após envio
- [x] Design responsivo
- [x] Acessível
- [x] Documentação completa

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Servidor não inicia | `ng serve --port 4201` |
| Porta em uso | Use porta diferente |
| Código não atualiza | Limpar cache (Ctrl+Shift+Del) |
| Erro no console | Verificar imports (FormsModule) |
| Validação não funciona | Adicionar `name` attribute |

---

## 🚀 Deploy Rápido

```bash
# 1. Build para produção
ng build --configuration production

# 2. Arquivos em dist/aula2003/

# 3. Deploy em servidor web
# Copiar pasta dist/aula2003/ para servidor
```

---

## 💡 Dicas Úteis

1. **Debug no Console**
   ```typescript
   console.log('Dados:', this.dados);
   console.log('Válido:', form.valid);
   ```

2. **Inspecionar Template**
   - F12 → Elements → Procurar por `#matriculaForm`

3. **Verificar Estado em Tempo Real**
   - Expandir seção "Status do Formulário" no formulário

4. **Testar Responsividade**
   - F12 → Ctrl+Shift+M → Device Mode

---

## 📈 Próximas Melhorias

1. API Backend
2. Autenticação
3. Email confirmação
4. Salvar em BD
5. Reactive Forms
6. Testes automatizados
7. Dark Mode
8. i18n (múltiplos idiomas)

---

**Última Atualização:** 20 de Março de 2026  
**Versão:** 1.0 ✅ FINAL

