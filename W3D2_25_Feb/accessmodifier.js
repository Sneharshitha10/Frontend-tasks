/************************ Access modifiers *************************/
var Computer = /** @class */ (function () {
    function Computer(name, price) {
        this.name = name;
        this.price = price;
    }
    return Computer;
}());
var comp = new Computer("Dell", 10000);
console.log(comp.name);
console.log(comp.price);
