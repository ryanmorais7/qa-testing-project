# qa-testing-project
Projeto de automação de testes end-to-end com Cypress, focado na validação de fluxos de interface web.

# 🧪 Central de Atendimento ao Cliente TAT - Testes Automatizados com Cypress

## 📌 Descrição
Projeto de automação de testes end-to-end utilizando Cypress, baseado em uma aplicação de formulário web (Central de Atendimento ao Cliente TAT).  

O objetivo é validar comportamentos da interface, regras de negócio e fluxos de envio de formulário.

---

## 🚀 Tecnologias utilizadas
- Cypress
- JavaScript
- Node.js

---

## 🎯 Objetivo do projeto
- Praticar automação de testes E2E
- Validar comportamentos de formulários web
- Aplicar boas práticas de testes automatizados
- Simular cenários reais de QA

---

## 🧪 Cenários de teste implementados

### ✔ Interface e navegação
- Verificação do título da aplicação

### ✔ Submissão de formulário
- Envio do formulário com sucesso
- Submissão sem preenchimento de campos obrigatórios
- Validação de mensagens de sucesso e erro

### ✔ Validação de campos
- Campo telefone aceita apenas valores numéricos
- Campos de texto com preenchimento e limpeza

### ✔ Seleção de produtos
- Seleção por texto (YouTube)
- Seleção por valor (Mentoria)
- Seleção por índice (Blog)

### ✔ Comandos customizados
- Uso de comando personalizado para preenchimento e envio de formulário

---

## ⚙️ Como executar o projeto

```bash
# Instalar dependências
npm install

# Abrir o Cypress
npx cypress open
