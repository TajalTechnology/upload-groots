interface IPlay {
  play(): void;
}

export class Strikeing implements IPlay {
  play() {
    return 'Welcome to the class';
  }
}
