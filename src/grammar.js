// Generated automatically by nearley, version 2.15.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


function extractObject(d) {
  const [firstKey, firstValue] = d[2];
  return d[3].reduce(
    (acc, [,,,[key, value]]) => ({ ...acc, [key]: value }), 
    { [firstKey]: firstValue }
  );
}

function extractType([type, args]) {
  return Object.assign({}, { type }, args && { args: args[1] });
}

function extractName([first, rest]) {
  return rest.reduce(
    (acc, [,,,str]) => `${acc}.${str.join('')}`,
    first.join('')
  )
}

var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "Chunk", "symbols": ["_", "Shape", "_"], "postprocess": d => d[1]},
    {"name": "Shape", "symbols": [{"literal":"{"}, "_", {"literal":"}"}], "postprocess": () => ({})},
    {"name": "Shape$ebnf$1", "symbols": []},
    {"name": "Shape$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "Pair"]},
    {"name": "Shape$ebnf$1", "symbols": ["Shape$ebnf$1", "Shape$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Shape", "symbols": [{"literal":"{"}, "_", "Pair", "Shape$ebnf$1", "_", {"literal":"}"}], "postprocess": extractObject},
    {"name": "Pair", "symbols": ["Key", "_", {"literal":":"}, "_", "Type"], "postprocess": ([key,,,,type]) => [key, type]},
    {"name": "Key", "symbols": ["dqstring"]},
    {"name": "Key", "symbols": ["sqstring"]},
    {"name": "Key$ebnf$1", "symbols": [/[\w]/]},
    {"name": "Key$ebnf$1", "symbols": ["Key$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Key", "symbols": ["Key$ebnf$1"], "postprocess": ([key]) => key.join('')},
    {"name": "Type$ebnf$1$subexpression$1", "symbols": ["_", "Args"]},
    {"name": "Type$ebnf$1", "symbols": ["Type$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Type$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Type", "symbols": ["Name", "Type$ebnf$1"], "postprocess": extractType},
    {"name": "Name$ebnf$1", "symbols": [/[\w]/]},
    {"name": "Name$ebnf$1", "symbols": ["Name$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Name$ebnf$2", "symbols": []},
    {"name": "Name$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[\w]/]},
    {"name": "Name$ebnf$2$subexpression$1$ebnf$1", "symbols": ["Name$ebnf$2$subexpression$1$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Name$ebnf$2$subexpression$1", "symbols": ["_", {"literal":"."}, "_", "Name$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "Name$ebnf$2", "symbols": ["Name$ebnf$2", "Name$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Name", "symbols": ["Name$ebnf$1", "Name$ebnf$2"], "postprocess": extractName},
    {"name": "Args", "symbols": [{"literal":"("}, "_", {"literal":")"}], "postprocess": () => []}
]
  , ParserStart: "Chunk"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
