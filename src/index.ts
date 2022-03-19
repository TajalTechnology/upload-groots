interface IPlay {
    play(): void;
}

class Strikeing implements IPlay {
    play() {
        return 'Welcome to the class';
    }
}
