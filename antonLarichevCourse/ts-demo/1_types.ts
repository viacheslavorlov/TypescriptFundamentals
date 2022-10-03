let a: number = 4;
let b = 5;
let c = true;
//?  b = 'ads'  нельзя присваивать переменной с одним типом данных другой тип данных
b = 42;

const d: string[] = ['asd', 'zcv', 'qwe'] //* масив строк
//! const dd: string[] = ['asdf', 1, 'asdf']
//? нельзя смешивать типы в массивах со строго определённым типом

//* любой тип данных
let e: any = 3;
e = 'three';
console.log(a , b, c, d, e)

//*      тип аргумента    тип возвращаемого значения (может быть несколько типов возвращаемого значения)
function test(a: string): string | number {
    return '';
}

const  test2 = (a: number): number => {
    return a * 2;
}

const arr: string[] = ['a', 'b', 'c']

console.log(arr.map((item: string) => item.toUpperCase()));


function countCoord(coord: {lat: number, long?: number}): string {
    return `latitude: ${coord.lat}, longitude: ${coord.long}`;
}
console.log(countCoord({lat: 42.2, long: 42.3}));

function printIt(id: string | number): string {
    if (typeof id === "number") {
        return id.toString();
    } else {
        return id;
    }
}

console.log(printIt(42));

const getSum = (a: number | number[]): number => {
    if (Array.isArray(a)) {
        return a.reduce((a, b) => a + b, 0);
    } else  {
        return a;
    }
}

console.log(getSum([3, 4, 6, 29]));

const x: undefined = undefined;
const z: null = null;