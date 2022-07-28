const isFetching: boolean = true;
const isLoading: boolean = false;

//* числа
const int: number = 42;
//! int = '';  нельзя менять тип данных переменной!!!!!
const float: number = 4.2;
const num: number = 3e10;

//* string
const message: string = 'Hello Typescript!';

//*Array
const numArray: number[] = [1, 1, 2, 3, 8, 13];
const numArray2: Array<number> = [1, 1, 2, 3, 8, 13];
const wordArray: string[] = ['Hello', 'Typescript!'];
const wordArray2: Array<string> = ['Hello', 'Typescript!'];

//*Tuple
const contact: [string, number] = ['slava', 12345];

//*/Any - любой тип данных
let variable: any = 42;
variable = 'new string'; //? может менять тип данных
variable = [1, 2, 4];  //? может менять тип данных

//todo =====================

function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('o, hi Mark!');

//* Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {
        console.log('infinite!');
    }
}
