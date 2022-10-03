enum Direction { //* числовой enum
    Up= 1, //* значение может быть задано вручную
    Down, //* остальные значения переопределяются соответственно заданному значению
    Left,
    Right
}

enum DirectionSTR { //* строковый enum
    Up= 'up',    //* значение должно быть задано вручную для всех полей
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

enum MixedEnum { //* смешанные enum's
    yes = 1,
    No = 'no'
}


function calcEnum(a: number) {
    return a * 2;
}

enum CalculatedEnum { //* рассчитываемые enums только числовые
    calc1 = calcEnum(2),
    calc2 = calcEnum(4)
}

function runEnum(obj: {Up: string, Down: string}): string {
    return obj.Up + ' ' + obj.Down;
}

console.log(runEnum(DirectionSTR))

enum Test {
    A
}

let testA = Test.A
let nameA = Test[testA] //A

const enum ConstEnum {
    A,
    B
}

let C = ConstEnum.B

console.log(C)

enum Dice {
    One,
    Two
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два'
        default:
            const a: never = dice
    }
}