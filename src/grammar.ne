@builtin "whitespace.ne"
@builtin "string.ne"

expression -> _ shape _  {% d => d[1] %}

shape -> "{" _ "}" {% () => ({}) %}
  | "{" _ pair (_ "," _ pair):* _ "}" {% extractObject %}

pair -> key _ ":" _ value {% ([key,,,,value]) => [key.join(''), value] %}

key -> dqstring | sqstring | [\w]:+ {% id %}

value -> "'" "test" "'" {% ([,value,]) => value %}

@{%

function extractObject(d) {
  const [firstKey, firstValue] = d[2];
  return d[3].reduce(
    (acc, [,,,[key, value]]) => ({ ...acc, [key]: value }), 
    { [firstKey]: firstValue }
  );
}

%}
