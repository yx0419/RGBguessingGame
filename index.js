// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 225)",
//     "rgb(255, 0, 255)"
// ]

var message = document.getElementById("mymessage");
var squares = document.querySelectorAll(".square");
var rgbtext = document.getElementById("rgb");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");


//generate six colors and pick a correct one.
var colors = generateColorsArray(6); //argument is how many colors to generate 
var correctColor = randomlyPickOneCorrectColor(6);


//display generated colors to all the squares on the screen.
for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {

        if (this.style.backgroundColor === correctColor) {
            message.textContent = 'Correct!';
            changeAllToCorrectColor();
            rgbtext.style.backgroundColor = correctColor;
        }
        else {
            message.textContent = 'try again';
            this.style.backgroundColor = 'white';
        }
    });
}


//when user clicked the correct square
function changeAllToCorrectColor() {
    for (var j = 0; j < colors.length; j++) {
        squares[j].style.backgroundColor = correctColor;
    }
};

//randomly pick one color as correct one out of six colors
function randomlyPickOneCorrectColor(size) {
    var randomIndex = Math.floor(Math.random() * size);//random number from 0 to 5 both inclusive
    var randomColor = colors[randomIndex];
    rgbtext.textContent = randomColor;
    return randomColor;
}

function generateColorsArray(size) {
    var colors = [];//empty array

    for (var i = 0; i < size; i++) {

        colors[i] = makeRGBstring(); //or colors.push(random()) also works.
    }
    return colors;//returns an array
}

function makeRGBstring() { //pick each color from 0 - 255 both inclusive
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
    var rgbString = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")"
    return rgbString;
}

easyBtn.addEventListener('click', function () {

    easyBtn.classList.add("activeone")
    hardBtn.classList.remove('activeone');

    colors = generateColorsArray(3);
    correctColor = randomlyPickOneCorrectColor(3);
    rgbtext.textContent = correctColor;

    //give three new colors
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    for (var i = colors.length; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }

    //hide bottom three squares
    message.textContent = "Which color does this RGB represents?";
    rgbtext.style.backgroundColor = "#1f2a44";

})

hardBtn.addEventListener('click', function () {

    hardBtn.classList.add('activeone');
    easyBtn.classList.remove('activeone');
    colors = generateColorsArray(6);
    correctColor = randomlyPickOneCorrectColor(6);
    rgbtext.textContent = correctColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    message.textContent = "Which color does this RGB represents?";
    rgbtext.style.backgroundColor = "#1f2a44";
})

/*
for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {

        if (squares[i] == correctColor) {
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











