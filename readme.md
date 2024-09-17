# Web Development Workshop 2024

## Requirements

### Node.js

- Install version 18 or 20 from [official Node.js website](https://nodejs.org/en/download/prebuilt-installer).
- Run `node --version` in terminal to confirm the installation.

### Git

- Install it from [official Git website](https://git-scm.com/downloads).
- Run `git --version` in order to confirm the installation.

> Also on Windows make sure you have installed `Git Bash`.

## Dummy Dish Endpoint

> POST, GET: `https://web-workshop-haw-2024.vercel.app`

```TypeScript
type Dish = {
  id: string,
  name: string, // min 2 characters
  price: number, // >= 0
  imageUrl?: string
}
```
