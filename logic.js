var cars = ["Honda", "Toyota", "BMW", "Volvo", "Mazda", "Audi", "Nissan"];

console.log(cars);
function original() {

for (var i = 0; i < cars.length; i++) {
    var originalButtons = $('<button>');

    originalButtons.text(cars[i]);
    console.log(originalButtons);
};
}
original();
$("#buttons").html("hello world");



    