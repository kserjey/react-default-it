const { Parser, Grammar } = require('nearley');
const grammar = require('./grammar');

function createParser() {
  return new Parser(Grammar.fromCompiled(grammar));
}

module.exports = createParser;