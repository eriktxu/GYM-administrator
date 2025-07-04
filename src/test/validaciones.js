export function contieneSQLInyeccion(input) {
  const patron = new RegExp("\\b(SELECT|INSERT|DELETE|UPDATE|DROP|EXEC|XP_|--|;|'|/\\|\\/)+\\b", "i");
  return patron.test(input);
}