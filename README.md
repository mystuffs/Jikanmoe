## Jikanmoe
An API wrapper for https://jikan.moe which provides an unofficial version of myanimelist API!

## Installation
Note: Since I've not yet published it on npm (will never) so I've written all the information to make it work.

```sh
# Install TypeScript
## For npm 8.12.1 or above
npm i --location=global typescript

## If you're using npm 7 or nearby, use `-g` parameter to install TypeScript globally
npm i -g typescript

# Clone the repo (you must have installed git before issuing the command)
git clone https://github.com/Ruzie/Jikanmoe.git

# Follow here
cd Jikanmoe && npm i && tsc
## ^ Change the directory and install all the required dependencies and invoke `tsc` to transpile.

## Alternatively you can also use `yarn` or `pnpm` (must have to installed it globally)

npm i --location=global yarn pnpm # (If you're using earlier version of npm (below 8.10.x), see the first message)
## Yarn
cd Jikanmoe && yarn && tsc
## pnpm
cd Jikanmoe && npm i && tsc
```

## Example
#### CommonJS
```js
const { default: Anime } = require("./dist/anime");

(async () => {
    const test = new Anime();
    const result = await test.getAnimePictures(212);
    console.log(result.data[0]);
})();
```
#### TypeScript
```ts
import type { IAnimePictures } from "./src/typings/anime";
import Anime from "./dist/anime";

(async () => {
    const test = new Anime();
    const result = await test.getAnimePictures(212) as IAnimePictures;
    console.log(result.data[0]);
})();
```
