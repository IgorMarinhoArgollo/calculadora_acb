# Calculadora de Custos de Arbitragem da ACB

![Último commit](https://img.shields.io/github/last-commit/IgorMarinhoArgollo/calculadora_acb)
![Licença](https://img.shields.io/badge/license-MIT-brightgreen)

🇺🇸 [Read in English](./README.md)

Calculadora web que estima os custos de arbitragem da **Associação Comercial da Bahia (ACB)**. A ACB não tinha uma calculadora oficial, então construí uma a partir das tabelas de custos publicadas por ela, para um cliente real. O tempo efetivo de desenvolvimento foi de cerca de **12 horas**, incluindo as funcionalidades, a responsividade e os ajustes de usabilidade.

**🔗 Demonstração: [calculadora-acb.netlify.app](https://calculadora-acb.netlify.app/)**

![Captura de tela](./public/calculadora.png)

## Como funciona

A pessoa responde a três perguntas:

1. Qual o valor da demanda?
2. Qual o tipo de arbitragem: expedita ou convencional?
3. Qual o número de árbitros: 1 ou 3?

A calculadora mostra a estimativa da taxa de registro, da taxa de administração e dos honorários dos árbitros. As regras seguem as tabelas da ACB: os valores dependem da faixa do valor da demanda, a taxa de administração é um percentual do valor com um teto, e a arbitragem expedita reduz a taxa de administração e os honorários. O cálculo está em [`src/Utils/Calculator`](./src/Utils/Calculator).

## Destaques

- Nasceu de uma necessidade real e foi entregue a um cliente real
- Responsiva, de celulares a telas grandes
- Detalhes de usabilidade: separador de milhares no campo de valor, bloqueios de entrada e destaque visual da opção selecionada

## Tecnologias

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## Como rodar

Requisito: Node.js 21 ou superior.

```bash
git clone https://github.com/IgorMarinhoArgollo/calculadora_acb.git
cd calculadora_acb
npm install
npm run dev
```

Outros scripts: `npm run build`, `npm run preview` e `npm run lint`.

## Autor

**Igor Marinho Argollo** · [LinkedIn](https://www.linkedin.com/in/igormarinhoargollo/) · [Portfólio](https://igor-marinho.netlify.app/)

## Licença

MIT
