
/**************************************************************************************
* v1.0 *
* Create a program where I can create different footballers with their main ability.
* There can be different abilities like striking, defending, controlling.
* And I can play with their main ability.
* e.g, messi with main ability Strikeing,
*      canavaro with main ability Defending,
*      xavi with main ability Controlling
**************************************************************************************/

interface IPlay {
    play(): void;
}

/********************************************************
 * Very simple game
 * We have strikers, defenders, controllers (play-makers)
 ********************************************************/

// Very simple game
// We have strikers, defenders, controllers (play-makers)

class Strikeing implements IPlay {
    play() {
        console.log("Shoot to score a goal!");
    }
}

class Defending implements IPlay {
    play() {
        console.log("Kick to defend!");
    }
}

class Controlling implements IPlay {
    play() {
        console.log("Dribble to escape opponent!");
    }
}

class Footballer {
    game: IPlay;

    constructor(game: IPlay) {
        this.game = game;
    }

    play() {
        this.game.play();
    }
}

let messi = new Footballer(new Strikeing());
messi.play();

let canavaro = new Footballer(new Defending());
canavaro.play();

let xavi = new Footballer(new Controlling());
xavi.play();

// --------------------------------------------------

/*******************************************************************
 * v2.0 *
 * Now we want to extend the first version to a second version where
 * we can have all the available abilities in a single footballer,
 * but with different amount/proportions.
 *******************************************************************/

/********************************************************
 * As now we want to have a better game play
 * Each player needs to have all three abilities but in 
 * different amount according to his abilities
 ********************************************************/

class StrikeingV2_0 implements IPlay {
    ability: number;
    constructor(ability: number) {
        this.ability = ability;
    }

    play() {
        console.log(`Shoot with ${this.ability}% ability to score a goal!`);
    }
}

class DefendingV2_0 implements IPlay {
    ability: number;
    constructor(ability: number) {
        this.ability = ability;
    }

    play() {
        console.log(`Kick with ${this.ability}% ability to defend!`);
    }
}

class ControllingV2_0 implements IPlay {
    ability: number;
    constructor(ability: number) {
        this.ability = ability;
    }

    play() {
        console.log(`Dribble with ${this.ability}% ability to escape opponent!`);
    }
}


class AllInFootballer {

    striking: StrikeingV2_0;
    defending: DefendingV2_0;
    controlling: ControllingV2_0;

    constructor(striking: StrikeingV2_0, defending: DefendingV2_0, controlling: ControllingV2_0) {
        this.striking = striking;
        this.defending = defending;
        this.controlling = controlling;
    }

    strike() {
        this.striking.play();
    }

    defend() {
        this.defending.play();
    }

    control() {
        this.controlling.play();
    }
}

let messi2_0 = new AllInFootballer(new StrikeingV2_0(100), new DefendingV2_0(10), new ControllingV2_0(100));
messi2_0.defend();
messi2_0.control();
messi2_0.strike();

let canavaro2_0 = new AllInFootballer(new StrikeingV2_0(70), new DefendingV2_0(95), new ControllingV2_0(80));
canavaro2_0.defend();
canavaro2_0.control();
canavaro2_0.strike();

let xavi2_0 = new AllInFootballer(new StrikeingV2_0(78), new DefendingV2_0(79), new ControllingV2_0(90));
xavi2_0.defend();
xavi2_0.control();
xavi2_0.strike();
