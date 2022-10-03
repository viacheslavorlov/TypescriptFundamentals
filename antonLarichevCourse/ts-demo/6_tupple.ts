const tup: [number, string, number] = [1, 'b', 3];

tup.push(4)
//* tup[3] даже после пуша дополнительного элемента в кортеж к нему нельзя будет обратится



console.log(tup.map(el => {
    switch (typeof el) {
        case "number":
            return el + 1;
        case "string":
            return el;
    }
}));

// console.log(tup[3]); нельзя обратится

//* веструктуризация кортежа

const [first, second, third] = tup;

console.log(first, second, third)