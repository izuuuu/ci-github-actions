const attack = require('./attack');

test('should return sentence when called correctly', () => {
  const result = attack('Smelly Ogre', 23);
  expect(result).toBe('Smelly Ogre dealt 23 damage!');
  expect(result).toMatchInlineSnapshot('"Smelly Ogre dealt 23 damage!"');
});
