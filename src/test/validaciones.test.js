import { contieneSQLInyeccion } from "./validaciones";

test("detecta palabra clave SQL", () => {
  expect(contieneSQLInyeccion("SELECT * FROM usuarios")).toBe(true);
});

test("detecta inyección con comillas y comentario", () => {
  expect(contieneSQLInyeccion("Robert'); DROP TABLE users;--")).toBe(true);
});

test("no detecta texto limpio", () => {
  expect(contieneSQLInyeccion("Juan Pérez")).toBe(false);
});