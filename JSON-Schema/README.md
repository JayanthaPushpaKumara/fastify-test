[json-schema-to-typescript](https://www.fastify.io/docs/latest/TypeScript/#json-schema)

```js
{
  "scripts": {
    "compile-schemas": "json2ts -i schemas -o types"
  }
} 
```
`json2ts` is a CLI utility included in `json-schema-to-typescript`. `schemas` is the input path, and `types` is the output path.

Run `npm run compile-schemas`. Two new files should have been created in the `types` directory.


`yarn `

`yarn build`

`yarn start`