import Character from "./../src/js/character.js";

describe('Character', () => {

  test('our character should include a value for art genre, inspiration level, skill level', () => {
    const mainCharacter = new Character("Mannerism", 1, 0);
    expect(mainCharacter.artGenre).toEqual("Mannerism");
    expect(mainCharacter.inspirationLevel).toEqual(1);
    expect(mainCharacter.skillLevel).toEqual(0);
  });

  test('increaseInspo should increase the inspirationLevel by 25', () => {
    const mainCharacter = new Character("Mannerism", 1, 0);
    expect(mainCharacter.increaseInspo()).toEqual(26); 
  });

});