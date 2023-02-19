# nodejs-fastify-mvc-starter-template
nodejs-fastify-mvc-starter-template

#### mrcs = Model-Routes-Controllers-Services

## initial
```
npm init -y
```
#### if you want to use yarn

##### install yarn at global

```
npm install -g yarn
```

##### then when you want to install package by using 'yarn' package manager

###### 'npm install' === 'yarn add' 
```
yarn add
```
###### 'npm install -D' === 'yarn add -D' 
```
yarn add -D
```

###### 'npm run' === 'yarn' 
```
yarn
```

##### install ts-node @types/node and typescript

```
npm install -D ts-node @types/node typescript
```


#### create the tscofig file
```
npx tsc --init
```

##### tsconfig.json

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */
    /* Language and Environment */
    "target": "ESNext",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    "baseUrl": "./src",                                  /* Specify the base directory to resolve non-relative module names. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": [
    "**/*.ts"
, "src/config/db.config.ts"  ],
  "exclude": [
    "node_modules",
    "**/*.d.ts",
    "**/*.spec.ts"
  ]
}
```

## create the app

#### install fastify

```
npm install fastify
```

#### create index.ts in root folder

```
index.ts
```


<!-- =========================== -->

#### dependencies

    @fastify/cors
    @fastify/swagger
    bcrypt
    dotenv
    fastify
    fastify-cors
    jsonwebtoken
    pg
    pg-hstore
    sequelize

```
npm install @fastify/cors @fastify/swagger bcrypt dotenv fastify fastify-cors jsonwebtoken pg pg-hstore sequelize
```



#### devDependencies

	@types/bcrypt
    @types/jsonwebtoken
    @types/node
    @types/sequelize
    @typescript-eslint/eslint-plugin
    @typescript-eslint/parser
    eslint-config-prettier
    eslint-plugin-prettier
    nodemon
    pino-pretty
    ts-node
    typescript


```
npm install -D @types/bcrypt @types/jsonwebtoken @types/node @types/sequelize @typescript-eslint/eslint-plugin 
npm install -D @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier nodemon pino-pretty ts-node typescript
```

