var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 225)",
    "rgb(255, 0, 255)"
]

var message = document.getElementById("mymessage");
var squares = document.querySelectorAll(".square");
var rgbtext = document.getElementById("rgb");
var pickedColor = randomlyPickOneColor();

//assign background colors to all the squares.
for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {

        if (this.style.backgroundColor == pickedColor) {
            message.textContent = 'Correct!';
            changeAllToCorrectColor();
        }
        else {
            message.textContent = 'try again';
            this.style.backgroundColor = 'white';
        }
    });
}

//when user clicked the correct square
function changeAllToCorrectColor() {

    for (var j = 0; j < squares.length; j++) {

        squares[j].style.backgroundColor = pickedColor;
    }
};

//randomly pick one square out of six squares
function randomlyPickOneColor() {
    var randomIndex = Math.floor(Math.random() * 6);
    var randomColor = colors[randomIndex];
    rgbtext.textContent = randomColor;
    return randomColor;
}









/*
for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {

        if (squares[i] == pickedColor) {
            alert('Correct!');
        }
        else {
            alert('try again');
        }
    });
}
*/
// This doesn't work because that anonymous function will be called
// only after user clicks, but variable 'i' will become 6 even before clicking it.
// because JS runs line by line from top to bottom. before clicking, js runs all the loops 6 times.











