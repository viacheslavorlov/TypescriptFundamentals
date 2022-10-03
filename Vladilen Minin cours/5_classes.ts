class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel, wheals) {
        this.model = theModel
        this.numberOfWheels = wheals
    }
    info() {
        return `Car ${this.model} has ${this.numberOfWheels} wheals`;
    }
}

class NewCar {
    readonly numberWheels: number = 3;
    constructor(readonly model: string) {}
}

const newCar = new NewCar('mercedez');
const typescript =  new Typescript('4.7.4');
const lada = new Car('лада', 4)

console.log(typescript.info('project'));
console.log(lada.info());
console.log(newCar.model, newCar.numberWheels)


//* ====================== *//

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go(): void {
        console.log('Go!')
    }
    public speek(): void {
        console.log(this.voice);
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();

cat.setVoice('Miu...Miu...яяяяяяяяя');
console.log(cat.color);
//* cat.voice; - protected свойство
//* cat.go() так нельзя - приватное свойство
console.log(cat.speek());

//* =============================== *//

abstract class Component {
    abstract render(): void
    abstract info():void
}

class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info!'
    }
}

