export default class Character {
  constructor(artGenre) {
    this.artGenre = artGenre;
    this.inspirationLevel = 1; // equiv for level up
    this.skillLevel = 0; // equiv to xp
  }

  increaseInspo() {
    // if (this.inspirationLevel < 1) {
    //   return this.inspirationLevel + 25;
    // }
    // return this.inspirationLevel;
  }

}