@builtin "whitespace.ne"
@builtin "string.ne"

expression -> _ shape _  {% d => d[1] %}

shape -> "{" _ "}" {% () => ({}) %}
  | "{" _ pair (_ "," _ pair):* _ "}" {% extractObject %}

pair -> key _ ":" _ type {% ([key,,,,type]) => [key, type] %}

key -> dqstring | sqstring | [\w]:+ {% ([key]) => key.join('') %}

type -> [\w]:+ ("." [\w]:+):* {% extractType %}

@{%

function extractObject(d) {
  const [firstKey, firstValue] = d[2];
  return d[3].reduce(
    (acc, [,,,[key, value]]) => ({ ...acc, [key]: value }), 
    { [firstKey]: firstValue }
  );
}

function extractType([first, rest]) {
  return {
    type: rest.reduce(
      (acc, [,str]) => `${acc}.${str.join('')}`,
      first.join('')
    )
  }
}

%}
