function logTime<T>(num: T): T { //* сохраняет единый тип передаваемый в функцию
    if (typeof num === 'string') {
        console.log(num.toLocaleUpperCase());
    }
    console.log(num, new Date());
    return num;
}

logTime<string>('42');
logTime<number>(42);
logTime<object>(new Date());


interface MyInterface {
    transform: <T, F>(a: T) => F
}
//! непонятно почему ошибка
// class MyGenClass <T> {
//     values: T
// }

interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num
}