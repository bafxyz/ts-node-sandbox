# Prerequisites

Install dependencies using either **yarn** or **npm**
We'll assume you're using `npm`, but if you're using `yarn` instead, adjust the commands appropriately (namely, replace `npm run` with `yarn` and `npm i` with `yarn`).

```bash
npm i
```

## Setup Documentation

### Development

For development mode:

```bash
npm run start
```

[nodemon](https://www.npmjs.com/package/nodemon) will automatically restart the application when file changes are detected. This is useful if the tool you're building executes code when run.

For running an individual `.ts` file:

```bash
npm run ts-node <file.ts>
```

### Linting

By default modified files should be checked by `eslint` and `prettier` on commit.

For linting files manualy run:

```bash
npm run lint
```

VSCode Users may need to add this to their workspace settings to integrate JS/TS Linting in general:

```json
  "eslint.validate": [
    "javascript",
    "typescript",
  ]
```

### Running tests

Run all tests:

```bash
npm run test
```

Run and watch all tests:

```bash
npm run test:watch
```

### Building the App

```bash
npm run build
```

## Building app with CircleCI

Having already pushed your project to your favorite git-repository hosting service, you're one click away from integrating your app with CircleCI.

- Login to [CircleCI](https://circleci.com/)
- On the left side menu, press `Add Projects`.
- Pinpoint your project and press `Set Up Project`.
- Choose `Linux` as the OS and `Node` as the language.
- Press `Start Building`, and you're all set! :tada:

CircleCI ensures that every commit is checked for errors before merging.
This basic setup runs `npm run lint`, `npm run test`, and `npm run build`.