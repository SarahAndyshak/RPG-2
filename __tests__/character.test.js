import Character from "./../src/js/character.js";

describe('Character', () => {

  test('our character should include a value for inspiration and skill', () => {
    const character = new Character(2, 2);
    expect(character.inspirationLevel).toEqual(2);
    expect(character.skillLevel).toEqual(2);
  });

});