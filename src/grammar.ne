@builtin "whitespace.ne"
@builtin "string.ne"

Chunk -> _ Shape _  {% d => d[1] %}

Shape -> "{" _ "}" {% () => ({}) %}
  | "{" _ Pair (_ "," _ Pair):* _ "}" {% extractObject %}

Pair -> Key _ ":" _ Type {% ([key,,,,type]) => [key, type] %}

Key -> dqstring | sqstring | [\w]:+ {% ([key]) => key.join('') %}

Type -> Name (_ Args):? {% extractType %}

Name -> [\w]:+ (_ "." _ [\w]:+):* {% extractName %}

Args -> "(" _ ")" {% () => [] %}

@{%

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

%}
