# ACB Arbitration Cost Calculator

![Last commit](https://img.shields.io/github/last-commit/IgorMarinhoArgollo/calculadora_acb)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

🇧🇷 [Leia em português](./README.pt-br.md)

A web calculator that estimates arbitration costs for the **Bahia Commercial Association (ACB)**. The ACB had no official calculator, so I built one from its published cost tables, for a real client. Effective development time: about **12 hours**, from feature work to responsive layout and usability polish.

**🔗 Live demo: [calculadora-acb.netlify.app](https://calculadora-acb.netlify.app/)**

![Screenshot](./public/calculadora.png)

## How it works

The user answers three questions:

1. What is the dispute value?
2. Which type of arbitration: expedited or conventional?
3. How many arbitrators: 1 or 3?

The calculator then shows the estimated registration fee, administration fee and arbitrators' fee. The rules follow the ACB cost tables: fees depend on the dispute-value band, the administration fee is a percentage of the dispute value with a cap, and expedited arbitration reduces the administration and arbitrators' fees. The calculation lives in [`src/Utils/Calculator`](./src/Utils/Calculator).

## Highlights

- Built from a real need and delivered for a real client
- Responsive, from phones to large screens
- Usability details: thousands separator in the value field, input blocking and visual feedback for the selected option

## Tech stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## Running locally

Requirements: Node.js 21 or newer.

```bash
git clone https://github.com/IgorMarinhoArgollo/calculadora_acb.git
cd calculadora_acb
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview` and `npm run lint`.

## Author

**Igor Marinho Argollo** · [LinkedIn](https://www.linkedin.com/in/igormarinhoargollo/) · [Portfolio](https://igor-marinho.netlify.app/)

## License

MIT
