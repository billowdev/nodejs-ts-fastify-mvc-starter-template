# nodejs-fastify-mvc-starter-template

nodejs-fastify-mvc-starter-template

## mrcs = Model-Routes-Controllers-Services

## initial application

```bash
npm init -y
```

### if you want to use yarn

#### install yarn at global

```bash
npm install -g yarn
```

##### then when you want to install package by using 'yarn' package manager

###### 'npm install' === 'yarn add'

```bash
yarn add
```

###### 'npm install -D' === 'yarn add -D'

```bash
yarn add -D
```

###### 'npm run' === 'yarn'

```bash
yarn
```

## install ts-node and typescript

```bash
npm install --save-dev ts-node @types/node typescript
```

### create the tscofig file

```bash
npx tsc --init
```

#### tsconfig.json

```json
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

### install fastify

```bash
npm install fastify
```

### create index.ts in root folder

```bash
index.ts
```

## trying the code below for your first api

### 1. import fastify

```ts
import fastify from "fastify";
```

### 2. create the app

```ts
const app = fastify()
```

### 3. create the first endpoint or route for your api

```ts
app.get("/", async () => "SERVER");
```

### 4. add port and run app using app.listen

```ts
    const PORT = 5000
    app.listen({port:Number(PORT)}, (err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`SERVE ON ${PORT}`)
    })
```

### 5. run your api type the script below in your terminal

```bash
ts-node index.ts
```

#### it should be showing the message "SERVE ON 5000"

### 6. make log it looking good by using log options 

#### 6.1 add the options for our app

```ts
const app = fastify({
	logger: true
})
```

#### 6.2 use this code below replace code from the 4.

```ts
    const PORT = 5000
	app.listen({port:Number(PORT)}, (err) => {
		if (err) {
			app.log.error(err);
			process.exit(1)
		}
		app.log.info(`SERVE ON ${PORT}`)
	})
```

##### 6.3 then your log will show like below

```bash
{"level":30,"time":1676779096246,"pid":25344,"hostname":"billo","msg":"Server listening at http://[::1]:5000"}
{"level":30,"time":1676779096248,"pid":25344,"hostname":"billo","msg":"Server listening at http://127.0.0.1:5000"}
{"level":30,"time":1676779096248,"pid":25344,"hostname":"billo","msg":"SERVE ON 5000"}
```

### 7. testing your api using thunder client

#### searching on visual studio code extensions

however you can use another solution for test your api like postman or if api you is get method you also use browser for that but i prefer using thunder client or postman or insomnia because it can use another http method such as GET POST PUT PATCH DELETE etc.

##### install extension

<img src="https://raw.githubusercontent.com/billowdev/nodejs-ts-fastify-mvc-starter-template/main/README/images/thunder-client.png" alt="thunder-client">

<img src="https://raw.githubusercontent.com/billowdev/nodejs-ts-fastify-mvc-starter-template/main/README/images/how-to-use-thunder-client.png" alt="how-to-use-thunder-client">


##### 8. so the first time code in index.ts file will be

```ts
import fastify from "fastify";

const app = fastify({
	logger: true
})

app.get("/", async () => "SERVER");

const PORT = 5000
app.listen({port:Number(PORT)}, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
```

## New directory src and controllers routes services etc following below

### 1. seperarte app to new file 

#### 1.1 split logic in index.ts to src/app.ts

##### code in app.ts

```ts
import fastify, { FastifyServerOptions } from "fastify";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	return app
}
export default App
```

##### code in index.ts

```ts
import App from "./src/app";

const app = App({
	logger: true
})
const PORT = 5000
app.listen({port:Number(PORT)}, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
```

### 2. /src/routes

#### 2.1 create routes in another file src/routes i will example for src/routes/article.route.ts

##### 1) new director 'routes' and create article.route.ts

```
article.route.ts
```

###### create route for articleRouter

```ts
import { FastifyInstance } from "fastify"; // import FastifyInstance

const articleRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	// create .get route endpoint for article route that '/'
	// mockup data
	const article = {
		id: "1",
		name: "node.js fastify",
		desc: "going fasting with jumping course 0 to 100 ><"
	}
	app.get(
		"/",
		// function handler: RouteHandlerMethod<RawServerDefau lt, IncomingMessage, ServerResponse<IncomingMessage>, RouteGenericInterface, unknown, FastifySchema, FastifyTypeProviderDefault, FastifyBaseLogger>):
		() => {
			return {
				// mockup data
				articles: [
					article
				]
			}
		}
	);
};

export default articleRouter;
```

##### 2) create index.ts inside route for export file

```ts
import articleRouter from "./article.route";

export { articleRouter};
``` 

#### 2.2 /src/app 

##### app.ts file import article route and register the router with prefix "/api/v1/articles"

```ts
import fastify, { FastifyServerOptions } from "fastify";
import {articleRouter} from "./routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	app.register(articleRouter, { prefix: "/api/v1/articles" });
	return app
}
export default App
```

#### 2.3 restart the app by cancel terminal using CTRL + C command and ts-node index.ts

#### 2.4 result api in thunder client

<img src="https://raw.githubusercontent.com/billowdev/nodejs-ts-fastify-mvc-starter-template/main/README/images/api-v1-aticles-get.png" alt="api-v1-aticles-get">


### 3. /src/controller (spliting handler function to controller file)



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

