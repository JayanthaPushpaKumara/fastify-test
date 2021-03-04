// fastify-plugin is highly recommended for any plugin you write
const fp = require("fastify-plugin");

function myPlugin(instance, options, done) {
  // decorate the fastify instance with a custom function called myPluginFunc
  instance.decorate("myPluginFunc", (input) => {
    return input.toUpperCase();
  });

  done();
}

module.exports = fp(myPlugin, {
  fastify: "3.x",
  name: "my-plugin", // this is used by fastify-plugin to derive the property name
});
