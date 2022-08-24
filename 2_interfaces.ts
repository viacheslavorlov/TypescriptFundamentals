 interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '123',
    size: {
        width: 5,
        height: 7
    }
}

//* rect2.id = 'qwer' //нельзя переписать readonly параметр

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

console.log(rect1, rect2, rect3, rect4);

// * ============== * //

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 49,
        height: 32
    },
    getArea(): number {
        return this.size.height * this.size.width;
    }
}

//* ====================== *//

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

const clock = new Clock();

console.log(clock.time);

clock.setTime(new Date(10000000));

console.log(clock.time);


//* =============== *//

interface Styles {
    [key: string]: string //* [тип ключа] : тип значения *//
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '20px',
    borderRadius: '10px'
}