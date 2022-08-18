var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '123',
    size: {
        width: 5,
        height: 7
    }
};
//* rect2.id = 'qwer' //нельзя переписать readonly параметр
rect2.color = 'black';
var rect3 = {};
var rect4 = {};
console.log(rect1, rect2, rect3, rect4);
var rect5 = {
    id: '123',
    size: {
        width: 49,
        height: 32
    },
    getArea: function () {
        return this.size.height * this.size.width;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var clock = new Clock();
console.log(clock.time);
clock.setTime(new Date(100000000000000));
console.log(clock.time);


