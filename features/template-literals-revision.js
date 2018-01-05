function specByYear(strings, specExpression) {
  const str0 = strings[0];
  const str1 = strings[1];
  const currentYear = new Date().getFullYear();

  console.info("Cooked", [...strings]);
  console.info("Raw", strings.raw);

  return str0 + specExpression + currentYear + str1;
}

const spec = 'ECMAScript ';

const output = specByYear`The ${ spec } spec is awesome! \u2665`;
// const illegalOutput = specByYear`The ${ spec } spec is awesome! \u`;