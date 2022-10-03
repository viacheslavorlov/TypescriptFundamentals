function add(a: number, b: number): number {
    return a + b;
}

console.log(add(200, 30));

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

console.log('aksjdfhbjk');

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWIthDefault extends MyPosition {
    default: string
}

function position(): MyPosition;
function position(a: number): MyPositionWIthDefault;
function position(a: number, b: number) : MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined};
    }

    if (a && !b) {
        return {x: a, y: undefined};
    }

    return {x: a, y: b};
}

console.log('empty',position());
console.log('one param', position(2));
console.log('two params', position(3, 5));