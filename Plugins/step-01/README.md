## Tutorial (https://www.fastify.io/docs/latest/TypeScript/#plugins)

`yarn init -y`

Add dependencies (yarn add <package...>)
`yarn add fastify fastify-plugin`

Add dev dependencies (yarn add <package...> [--dev/-D]) [link] (https://classic.yarnpkg.com/en/docs/cli/add/#toc-commands)
`yarn add typescript @types/node --dev`

...

Initialize a TypeScript configuration file
`npx typescript --init`

add yarn fmt

- 01 add dependencies - `yarn add prettier --dev`
- 02 add scripts -

```json
"scripts": {
    "fmt": "prettier --write . ./*.md"
}
```
