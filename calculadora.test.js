const test = require('node:test');
const assert = require('node:assert');
const { sumar, dividir } = require('./calculadora');

test('sumar 2 + 3 = 5', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test('dividir 10 / 2 = 5', () => {
  assert.strictEqual(dividir(10, 2), 5);
});

test('dividir entre cero lanza error', () => {
  assert.throws(() => dividir(1, 0));
});