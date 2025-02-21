# Relay and React Router v7 (Framework mode) Example

I finally got React Router v7 working with framework mode thanks to help from discord.

The main thing that helped it finally work was changing the vite config to have optimizeDeps and noExternal
The vite-plugin-relay and reactRouter plugins should be the only essential plugins for most projects (atleast
for getting React Router v7 framework mode and relay working well together.)

**vite.config.ts**

```ts
import relay from "vite-plugin-relay";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import graphql from "@rollup/plugin-graphql";

export default defineConfig({
  plugins: [graphql(), tailwindcss(), reactRouter(), tsconfigPaths(), relay],
  ssr: {
    noExternal: [/^relay-runtime(?:\/|$)/, /react-relay(?:\/|$)/],
    optimizeDeps: {
      include: [
        "relay-runtime",
        "relay-runtime/experimental",
        "react-relay",
        "react",
        "react-dom",
        "react/jsx-runtime",
      ],
    },
  },
  optimizeDeps: {
    include: [
      "relay-runtime",
      "relay-runtime/experimental",
      "react-relay",
      "react",
      "react-dom",
      "react/jsx-runtime",
    ],
  },
});
```

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
