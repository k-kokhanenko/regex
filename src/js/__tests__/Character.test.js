import Character from '../Character';

test('Character ok', () => {
  const obj = new Character('name', 'Magician');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('Magician');
});

test('Character with error type', () => {
  expect(() => {
    const obj = new Character('name', 'SomeType');
    console.log(obj.name);
  }).toThrowError('Передан не подходящий тип');
});

test('Character with error name', () => {
  expect(() => {
    const obj = new Character('LongLongLongName', 'Magician');
    console.log(obj.name);
  }).toThrowError('Длина имени должна быть в диапазоне 2-10 символов');
});

test('Character levelUp with error', () => {
  expect(() => {
    const obj = new Character('name', 'Daemon');
    obj.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test('Character levelUp', () => {
  const obj = new Character('name', 'Daemon');
  obj.health = 0;
  obj.attack = 10;
  obj.defence = 20;
  obj.levelUp();

  expect(obj.level).toBe(2);
  expect(obj.attack).toBe(12);
  expect(obj.defence).toBe(24);
  expect(obj.health).toBe(100);
});

test('Character levelUp with error', () => {
  expect(() => {
    const obj = new Character('name', 'Daemon');
    obj.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test('Character damage', () => {
  const obj = new Character('name', 'Daemon');
  obj.damage(5);
  expect(obj.health).toBe(95);
});

test('Character damage 2', () => {
  const obj = new Character('name', 'Daemon');
  obj.health = -10;
  obj.damage(5);
  expect(obj.health).toBe(-10);
});
