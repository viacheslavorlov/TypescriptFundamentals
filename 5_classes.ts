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
const typescript =  new Typescript('4.7.4');
const lada = new Car('лада', 4)

console.log(typescript.info('project'));
console.log(lada.info());


//* ====================== *//

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go!')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();

cat.setVoice('Miu...');
console.log(cat.color);
//* cat.voice; cat.go()  //так нельзя - приватное свойство