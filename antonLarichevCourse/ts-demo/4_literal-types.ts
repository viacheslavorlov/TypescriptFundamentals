const testLiteralType: 'test' = 'test';

type actionType = 'up' | 'down'; //*   строковый литеральный тип
//* literal types нужны для сужения возможных выводов функции

function performAction(action: actionType): -1 | 1 | undefined { //* вывод функции цифровой литеральный тип (
    //* буквально - результатом функции может быть только 1 или -1
    switch (action) {
        case "down":
            return -1;
        case "up":
            return 1;
        default:
            console.log('error');
    }
}

console.log(performAction('down'));
