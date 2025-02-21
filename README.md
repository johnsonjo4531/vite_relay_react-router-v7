# Trying to get Relay and React Router v7 (Framework mode) working

I'm trying to get relay working with file routing with react router v7 in framework mode.
I'm wanting to use it ultimately with ssr set to false. My hope is the framework mode even without ssr
will eventually allow me to usePreloadedQuery and useQueryLoader and loadQuery in react-router.

## How to run the project

First npm install:

```bash
npm i
```

Then build the relay types:

```
npx --package=relay-runtime 'relay-compiler'
```

Then run either:

```bash
npm run dev
```

or the two following commands

```bash
npm run build
```

and

```bash
npm run start
```

## What I've tried so far

You can look at what I've attempted so far. I keep getting the following error.

```bash
[vite] (ssr) Error when evaluating SSR module virtual:react-router/server-build: [vite] Named export 'RelayEnvironmentPr
ovider' not found. The requested module 'react-relay' is a CommonJS module, which may not support all module.exports as named expor
ts.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'react-relay';
const {RelayEnvironmentProvider} = pkg;
```

I also get the following error:

```bash
 [vite] Internal server error: [vite] Named export 'RelayEnvironmentProvider' not found. The requested module 'react-rela
y' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'react-relay';
const {RelayEnvironmentProvider} = pkg;
```

If I follow through on trying the suggested edit and instead use:

```tsx
import pkg from 'react-relay';
const {RelayEnvironmentProvider} = pkg;
```

Then the error still remains since Relay's generated code also generates code such as the ConcreteRequest from "relay-runtime" as well... and that just gives the same error.

Some possible ideas I've had:

1. My first instinct is I figure there is a way to not worry about the error itself, but instead somehow fix the issue of relay being seen as a common js module, because I can't fix the underlying generated files.
2. I think there is something going on with react-router's new ssr mode even when set to false it still creates some form of not allowing code that touches the window?

> It's important to note that setting ssr:false only disables runtime server rendering. React Router will still server render your root route at build time to generate the index.html file. This is why your project still needs a dependency on @react-router/node and your routes need to be SSR-safe. That means you can't call window or other browser-only APIs during the initial render, even when server rendering is disabled.
> - https://reactrouter.com/how-to/spa#single-page-app-spa

4. I figure that the issue lies inside of the way react-router v7 maybe more so than relay, but I'm not sure if it's a constraint they must choose thanks to the aforementioned ssr basically always being somewhat enabled.
5. It could still be fixed by relay since it is the common js module causing the issue.
6. Hopefully this can just be fixed by configuring vite better.

## Running the app without react-router

Simply change vite.config.ts to the following to check that relay is even setup correctly:

**vite.config.ts**
```ts
import relay from "vite-plugin-relay";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import graphql from "@rollup/plugin-graphql";

export default defineConfig({
  plugins: [
    graphql(),
    tailwindcss(),
    //reactRouter(),
    tsconfigPaths(),
    relay
  ],
});
```
