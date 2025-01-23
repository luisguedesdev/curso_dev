const calculadora = require("../../models/calculadora");

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deverá restornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deverá restornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

//Usando o Jest para testar funções, podemos ver que devomos usar o método test() e colocar o nome do teste e a função que será executada. Dentro da função, usamos o método expect() para passar o valor que queremos testar e o método toBe() para passar o valor esperado. Se o valor esperado for igual ao valor passado, o teste passa. Caso contrário, o teste falha.
