// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 225)",
//     "rgb(255, 0, 255)"
// ]
var numbOfSquares = 6; //keeps track of what mode we are on. or the number of squares.
var message = document.getElementById("mymessage");
var squares = document.querySelectorAll(".square");
var rgbtext = document.getElementById("rgb");
var modeBtns = document.querySelectorAll(".mode");//It gives me a list of elements.

//modeBtns[0].addEventListener('click', func(3, this));//This is wrong because addEventListner needs callback in second parameter, and func(3, this) is not callback because you already called it.
//so we need an anonymous function in the second parameter. Function name is a pointer to that function. anonymous function is also a pointer but has no name.
//all the function is a pointer to the beginning of the region of the memory that contains that function's executable code.

modeBtns[0].addEventListener('click', function () {
    func(3, this)//this has second argument 'this' because in this way, we can send 'this' to func function. Without this second argument, func doesn't know what 'this' is.
})
modeBtns[1].addEventListener('click', function () {
    func(6, this)
})

/*
function () {
    func(3, this)
}
This second parameter of addEventListenr is an anonymous function declaration, not calling function. so it can be callback. only when click event occurs, this function will be called later.
*/

// modeBtns[0].addEventListener('click', func(3));//func doesn't know what 'this' is inside the func below.
// modeBtns[1].addEventListener('click', func(6));

//generate six colors and pick a correct one.
var colors = generateColorsArray(numbOfSquares); //argument is how many colors to generate 
var correctColor = randomlyPickOneCorrectColor(numbOfSquares);

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

function func(num, that) {//'that' is same as 'this' that was sent from modeBtns[1].addEventListener('click', function () { func(6, this)})
    numbOfSquares = num;

    modeBtns[0].classList.remove('activeone');
    modeBtns[1].classList.remove('activeone');
    that.classList.add("activeone")

    colors = generateColorsArray(numbOfSquares);
    correctColor = randomlyPickOneCorrectColor(numbOfSquares);
    rgbtext.textContent = correctColor;

    //give three new colors
    for (var i = 0; i < numbOfSquares; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    //hide bottom three squares on the screen.
    if (that.textContent == 'Easy Mode') {
        for (var i = colors.length; i < squares.length; i++) {
            squares[i].style.display = "none";
        }
    } else {
        //display bottom three squares on the screen again.
        for (var i = 3; i < numbOfSquares; i++) {
            squares[i].style.display = "block";
        }
    }
    message.textContent = "Which color does this RGB represents?";
    rgbtext.style.backgroundColor = "#1f2a44";
}

//These two were very similar so was refactored using func function.
// easyBtn.addEventListener('click', function () {
//     numbOfSquares = 3;
//     easyBtn.classList.add("activeone")
//     hardBtn.classList.remove('activeone');

//     colors = generateColorsArray(numbOfSquares);
//     correctColor = randomlyPickOneCorrectColor(numbOfSquares);
//     rgbtext.textContent = correctColor;

//     //give three new colors
//     for (var i = 0; i < numbOfSquares; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     //hide bottom three squares on the screen.
//     for (var i = colors.length; i < squares.length; i++) {
//         squares[i].style.display = "none";
//     }
//     message.textContent = "Which color does this RGB represents?";
//     rgbtext.style.backgroundColor = "#1f2a44";
// })

// hardBtn.addEventListener('click', function () {
//     numbOfSquares = 6;

//     hardBtn.classList.add('activeone');
//     easyBtn.classList.remove('activeone');
//     colors = generateColorsArray(numbOfSquares);
//     correctColor = randomlyPickOneCorrectColor(numbOfSquares);
//     rgbtext.textContent = correctColor;

//     for (var i = 0; i < colors.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     //display bottom three squares on the screen again.
//     for (var i = 3; i < numbOfSquares; i++) {
//         squares[i].style.display = "block";
//     }
//     message.textContent = "Which color does this RGB represents?";
//     rgbtext.style.backgroundColor = "#1f2a44";
// })


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
This doesn't work because that anonymous function will be called
only after user clicks, but variable 'i' will become 6 even before clicking it.
because JS runs line by line from top to bottom. before clicking, js runs all the loops 6 times.
*/