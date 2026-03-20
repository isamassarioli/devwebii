# 🧪 Guia de Testes - Ficha de Matrícula

## Casos de Teste para Validação

---

## 📝 Testes de Campos Individuais

### 1️⃣ Nome Completo

#### Teste 1.1: Campo Vazio
- **Ação:** Deixar vazio, clicar em outro campo
- **Esperado:** Mensagem "Nome é obrigatório"
- **Resultado:** ✅ PASS

#### Teste 1.2: Menos de 3 caracteres
- **Ação:** Digitar "ab", clicar em outro campo
- **Esperado:** Mensagem "Nome deve ter no mínimo 3 caracteres"
- **Resultado:** ✅ PASS

#### Teste 1.3: 3 ou mais caracteres
- **Ação:** Digitar "João Silva"
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

### 2️⃣ E-mail

#### Teste 2.1: Campo Vazio
- **Ação:** Deixar vazio, clicar em outro campo
- **Esperado:** Mensagem "E-mail é obrigatório"
- **Resultado:** ✅ PASS

#### Teste 2.2: Formato Inválido
- **Ação:** Digitar "email_invalido", clicar em outro campo
- **Esperado:** Mensagem "E-mail inválido. Use o formato: seu@email.com"
- **Resultado:** ✅ PASS

#### Teste 2.3: Formato Válido
- **Ação:** Digitar "usuario@email.com"
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

### 3️⃣ Idade

#### Teste 3.1: Campo Vazio
- **Ação:** Deixar vazio, clicar em outro campo
- **Esperado:** Mensagem "Idade é obrigatória"
- **Resultado:** ✅ PASS

#### Teste 3.2: Menor que 18
- **Ação:** Digitar "17", clicar em outro campo
- **Esperado:** Mensagem "A idade mínima é 18 anos"
- **Resultado:** ✅ PASS

#### Teste 3.3: Exatamente 18
- **Ação:** Digitar "18"
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

#### Teste 3.4: Maior que 18
- **Ação:** Digitar "25"
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

### 4️⃣ Senha

#### Teste 4.1: Campo Vazio
- **Ação:** Deixar vazio, clicar em outro campo
- **Esperado:** Mensagem "Senha é obrigatória"
- **Resultado:** ✅ PASS

#### Teste 4.2: Menos de 6 caracteres
- **Ação:** Digitar "abc12", clicar em outro campo
- **Esperado:** Mensagem "Senha deve ter no mínimo 6 caracteres"
- **Resultado:** ✅ PASS

#### Teste 4.3: 6 ou mais caracteres
- **Ação:** Digitar "Senha@123"
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

### 5️⃣ Confirmar Senha

#### Teste 5.1: Senhas Diferentes
- **Ação:** 
  - Senha: "Senha@123"
  - Confirmar: "Senha@456"
  - Clicar "Cadastrar"
- **Esperado:** Mensagem "As senhas não correspondem"
- **Resultado:** ✅ PASS

#### Teste 5.2: Senhas Iguais
- **Ação:** 
  - Senha: "Senha@123"
  - Confirmar: "Senha@123"
  - Clicar "Cadastrar"
- **Esperado:** Nenhuma mensagem, processo continua
- **Resultado:** ✅ PASS

---

### 6️⃣ Gênero

#### Teste 6.1: Não Selecionado
- **Ação:** Deixar "Selecione uma opção"
- **Esperado:** Mensagem "Gênero é obrigatório"
- **Resultado:** ✅ PASS

#### Teste 6.2: Selecionado
- **Ação:** Selecionar "Masculino" (ou qualquer opção)
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

### 7️⃣ Cidade

#### Teste 7.1: Não Selecionada
- **Ação:** Deixar "Selecione uma cidade"
- **Esperado:** Mensagem "Cidade é obrigatória"
- **Resultado:** ✅ PASS

#### Teste 7.2: Selecionada
- **Ação:** Selecionar "Vitória" (ou qualquer cidade)
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

### 8️⃣ Aceite dos Termos

#### Teste 8.1: Não Marcado
- **Ação:** Deixar desmarcado, clicar em outro campo
- **Esperado:** Mensagem "Você deve aceitar os termos e condições"
- **Resultado:** ✅ PASS

#### Teste 8.2: Marcado
- **Ação:** Marcar checkbox
- **Esperado:** Nenhuma mensagem de erro
- **Resultado:** ✅ PASS

---

## 🔘 Testes do Botão Cadastrar

### Teste 9.1: Formulário Completamente Vazio
- **Ação:** Abrir formulário, não preencher nada
- **Esperado:** Botão "Cadastrar" desabilitado (cinzento, não clicável)
- **Resultado:** ✅ PASS

### Teste 9.2: Formulário Parcialmente Preenchido
- **Ação:** Preencher apenas nome, e-mail e gênero
- **Esperado:** Botão "Cadastrar" ainda desabilitado
- **Resultado:** ✅ PASS

### Teste 9.3: Formulário Completamente Válido
- **Ação:** Preencher todos os campos corretamente
- **Esperado:** Botão "Cadastrar" habilitado (azul, clicável)
- **Resultado:** ✅ PASS

### Teste 9.4: Senhas Não Correspondem
- **Ação:** Preencher tudo, mas com senhas diferentes
- **Esperado:** Botão "Cadastrar" desabilitado
- **Resultado:** ✅ PASS

### Teste 9.5: Idade Menor que 18
- **Ação:** Preencher tudo com idade menor que 18
- **Esperado:** Botão "Cadastrar" desabilitado
- **Resultado:** ✅ PASS

---

## 📊 Testes de Fluxo Completo

### Teste 10.1: Envio Válido Completo
- **Ação:**
  1. Preencher nome: "João Silva Santos"
  2. E-mail: "joao@ifes.edu.br"
  3. Idade: 22
  4. Gênero: "Masculino"
  5. Cidade: "Vitória"
  6. Senha: "Senha@123"
  7. Confirmar: "Senha@123"
  8. Marcar termos
  9. Clicar "Cadastrar"
- **Esperado:** 
  - Resumo modal aparece
  - Todos os dados são exibidos corretamente
  - Botões "Editar" e "Confirmar" disponíveis
- **Resultado:** ✅ PASS

### Teste 10.2: Editar Após Envio
- **Ação:**
  1. Enviar formulário válido
  2. Clicar "Editar Formulário" no resumo
- **Esperado:**
  - Formulário reaparece
  - Dados permanecem preenchidos
  - Resumo desaparece
- **Resultado:** ✅ PASS

### Teste 10.3: Limpar Formulário
- **Ação:**
  1. Preencher alguns campos
  2. Clicar "Limpar Formulário"
- **Esperado:**
  - Todos os campos são zerados
  - Mensagens de erro desaparecem
  - Estado do formulário reseta
- **Resultado:** ✅ PASS

---

## 🖥️ Testes de Responsividade

### Teste 11.1: Desktop (1920x1080)
- **Ação:** Abrir em navegador desktop em resolução grande
- **Esperado:**
  - Formulário bem distribuído
  - Botões lado a lado
  - Sem scroll horizontal
- **Resultado:** ✅ PASS

### Teste 11.2: Tablet (768x1024)
- **Ação:** Abrir em tablet ou redimensionar janela
- **Esperado:**
  - Layout adapta para tablet
  - Espaçamento apropriado
  - Campos legíveis
- **Resultado:** ✅ PASS

### Teste 11.3: Mobile (375x667)
- **Ação:** Abrir em celular ou redimensionar para mobile
- **Esperado:**
  - Stack vertical dos campos
  - Botões em coluna
  - Tudo legível sem zoom
  - Sem scroll horizontal
- **Resultado:** ✅ PASS

---

## ⌨️ Testes de Acessibilidade

### Teste 12.1: Navegação por Teclado
- **Ação:** Usar TAB para navegar entre campos
- **Esperado:**
  - Todos os campos recebem foco
  - Foco é visível
  - Ordem lógica
- **Resultado:** ✅ PASS

### Teste 12.2: Labels Associadas
- **Ação:** Clicar na label de um input
- **Esperado:**
  - O input recebe foco
  - Labels estão corretamente associadas
- **Resultado:** ✅ PASS

### Teste 12.3: Leitura em Alto Contraste
- **Ação:** Ativar modo alto contraste do navegador
- **Esperado:**
  - Cores mantém contraste
  - Texto legível
- **Resultado:** ✅ PASS

---

## 🔄 Testes de Revalidação

### Teste 13.1: Mudança de Valores
- **Ação:**
  1. Digitar "ab" no nome
  2. Ver erro aparecer
  3. Adicionar "c" para fazer "abc"
- **Esperado:**
  - Erro desaparece imediatamente
  - Campo fica válido
- **Resultado:** ✅ PASS

### Teste 13.2: Limpeza de Campo
- **Ação:**
  1. Digitar "João"
  2. Deletar tudo
  3. Campo vira vazio
- **Esperado:**
  - Erro "Nome é obrigatório" aparece
  - Campo fica inválido
- **Resultado:** ✅ PASS

---

## 📋 Resumo dos Testes

| # | Categoria | Teste | Status |
|---|-----------|-------|--------|
| 1 | Nome | Campo vazio | ✅ PASS |
| 2 | Nome | Menos de 3 caracteres | ✅ PASS |
| 3 | Nome | Válido | ✅ PASS |
| 4 | E-mail | Campo vazio | ✅ PASS |
| 5 | E-mail | Formato inválido | ✅ PASS |
| 6 | E-mail | Formato válido | ✅ PASS |
| 7 | Idade | Campo vazio | ✅ PASS |
| 8 | Idade | Menor que 18 | ✅ PASS |
| 9 | Idade | Válida | ✅ PASS |
| 10 | Senha | Campo vazio | ✅ PASS |
| 11 | Senha | Menos de 6 caracteres | ✅ PASS |
| 12 | Senha | Válida | ✅ PASS |
| 13 | Confirmar | Diferentes | ✅ PASS |
| 14 | Confirmar | Iguais | ✅ PASS |
| 15 | Gênero | Não selecionado | ✅ PASS |
| 16 | Gênero | Selecionado | ✅ PASS |
| 17 | Cidade | Não selecionada | ✅ PASS |
| 18 | Cidade | Selecionada | ✅ PASS |
| 19 | Termos | Não marcado | ✅ PASS |
| 20 | Termos | Marcado | ✅ PASS |
| 21 | Botão | Formulário vazio | ✅ PASS |
| 22 | Botão | Parcialmente preenchido | ✅ PASS |
| 23 | Botão | Completamente válido | ✅ PASS |
| 24 | Botão | Senhas diferentes | ✅ PASS |
| 25 | Botão | Idade < 18 | ✅ PASS |
| 26 | Fluxo | Envio válido | ✅ PASS |
| 27 | Fluxo | Editar após envio | ✅ PASS |
| 28 | Fluxo | Limpar formulário | ✅ PASS |
| 29 | Responsividade | Desktop | ✅ PASS |
| 30 | Responsividade | Tablet | ✅ PASS |
| 31 | Responsividade | Mobile | ✅ PASS |
| 32 | Acessibilidade | Navegação por teclado | ✅ PASS |
| 33 | Acessibilidade | Labels associadas | ✅ PASS |
| 34 | Acessibilidade | Alto contraste | ✅ PASS |
| 35 | Revalidação | Mudança de valores | ✅ PASS |
| 36 | Revalidação | Limpeza de campo | ✅ PASS |

**Total: 36 testes | Aprovados: 36 | Taxa de sucesso: 100%**

---

## 🎯 Conclusão

Todos os casos de teste foram executados com sucesso. O formulário de matrícula atende a todos os requisitos especificados na atividade prática e oferece uma experiência de usuário robusta e acessível.

