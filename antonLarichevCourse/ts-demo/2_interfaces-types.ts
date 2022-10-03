//* создание типа для разгрузки записи функции и переиспользования в других функциях
type Point = {
    x: number,
    y: number
}

type StringOrNum = string | number;

type D3Point = Point & {
    z: number
}

interface IPoint {
    x: number,
    y: number
}

function printCoord(coord: IPoint | Point): StringOrNum {
    //* функция
    return coord.x + coord.y;
}

interface I3dPoint extends IPoint {
    z: number;
}