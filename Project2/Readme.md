# Day 1

Starting new project. In this project we are using TypeScript for frontend and backend. In this project we will follow all of the coding standard and create a full fledge SaaS product with a mutlitenant architecture[mutliple database or table] system.

Today we creted a new project

- `npm init -y`
- installed required packages `npm install express`
- created an `.env` file and `config` folder to store all of the confidential data which wont be pushed to the github
- installed `dotenv` package to access the `.env` contents

```
import { config } from "dotenv";
config();

export const envconfig = {
  portNumber: process.env.PORT,
};
```

- While using `process` it showed error and fixed it using `npm i -D @types/nodes` this happended because TypeScript doesnt automatically knows about node js global types, this install Node.js type definitions as a development dependency.

- Also installed `nodemon ` package that is used to restart the node js app automatically when it detects changes
- In typescript project if package have `DT` in it in npmjs.com we have to manually install the type decalartion for the package using `npm i -D @types/<packagename>`
- If the package have `TS` in it in npmjs.com we don't have to manually install type decalartion for it.
- If nodemon is installed, it will throw error `ts node not found`, we have to install ts-node `npm install --save-dev ts-node typescript @types/node`

- Then we encounter `unknown file extension .ts`, we have to install `npm i -D typescript`
- Then we have to `npx tsx --init `
