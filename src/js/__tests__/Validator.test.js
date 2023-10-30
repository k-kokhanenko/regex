import Validator from '../Validator';

test('Validator 1', () => {
  const obj = new Validator();
  const res = obj.validateUserName('dfsdfsdfsdf');
  expect(res).toBe(true);
});

test('Validator 2', () => {
  const obj = new Validator();
  const res = obj.validateUserName('13d67fsdfsdf');
  expect(res).toBe(true);
});

test('Validator 3', () => {
  const obj = new Validator();
  const res = obj.validateUserName('fs23dвавfsdf');
  expect(res).toBe(false);
});

test('Validator 4', () => {
  const obj = new Validator();
  const res = obj.validateUserName('fs243dвавfsdf');
  expect(res).toBe(false);
});

test('Validator 5', () => {
  const obj = new Validator();
  const res = obj.validateUserName('-abs3-');
  expect(res).toBe(false);
});

test('Validator 6', () => {
  const obj = new Validator();
  const res = obj.validateUserName('_abs3_');
  expect(res).toBe(false);
});

test('Validator 7', () => {
  const obj = new Validator();
  const res = obj.validateUserName('1abs2');
  expect(res).toBe(false);
});
