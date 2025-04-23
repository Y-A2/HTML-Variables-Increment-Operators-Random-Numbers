// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
//Incrementing Variables
var counter = 0;
var minus50Btn = document.getElementById("minus50");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var displayEl = document.getElementById("display");
//Story String Variables
var story = "Once upon a time, ";
var stringinEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
//Random Number Variables
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");

// Event Listeners
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
plus1Btn.addEventListener("click", plus1fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus50Btn.addEventListener("click", plus50fcn);
stringinEl.addEventListener("change", updateStory);
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("random-rgb").addEventListener("click", color);
document.getElementById("random-size").addEventListener("click", size);

function color()
{
    var rgbString1 = Math.random() * 255;
    var rgbString2 = Math.random() * 255;
    var rgbString3 = Math.random() * 255;
    document.getElementById("HTML").style.background = `rgb(${rgbString1}, ${rgbString2}, ${rgbString3})`;
}

function size()
{   
    var size = Math.random() * 75;
    document.getElementById("body").style.fontSize = `${size}px`
}
function reset()
{
    location.reload();
}

function round1()
{
    let rand = Math.random();
    rand = rand.toFixed(3)
    console.log(rand);
    document.getElementById("rand1-out").innerHTML = rand;
}

function round2()
{
    let rand = Math.random() * 100;
    rand = Math.round(rand);
    document.getElementById("rand2-out").innerHTML = rand;
}

function round3()
{
    let rand = Math.random() * 10 - 5;
    rand = Math.round(rand);
    document.getElementById("rand3-out").innerHTML = rand;
}

function round4()
{
    let negative = +document.getElementById("rand-in1").value;
    let positive = +document.getElementById("rand-in2").value;
    let rand = Math.random() * (positive - negative) + negative;
    rand = Math.round(rand);
    document.getElementById("rand4-out").innerHTML = rand;
}

function updateStory()
{
var word = stringinEl.value;
story += word + " ";
stringinEl.value = "";
storyEl.innerHTML = story;
}
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
function minus50fcn()
{
    counter = counter - 50;
    console.log(counter);
    displayEl.innerHTML = counter;
}

function minus10fcn()
{
    counter = counter - 10;
    console.log(counter);
    displayEl.innerHTML = counter;
}

function minus1fcn()
{
    counter = counter - 1;
    console.log(counter);
    displayEl.innerHTML = counter;
}

function plus1fcn()
{
    counter = counter + 1;
    console.log(counter);
    displayEl.innerHTML = counter;
}

function plus10fcn()
{
    counter = counter + 10;
    console.log(counter);
    displayEl.innerHTML = counter;
}

function plus50fcn()
{
    counter = counter + 50;
    console.log(counter);
    displayEl.innerHTML = counter;
}


// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!



// 4. Math.random() is used to bring RNG (random number generator) to your applications.



// Check your understanding
  // 1. Complete the rest of the incrementing buttons.
  // 2. Complete the random __ to __ button.
  // 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
  // 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

  // i.e.  var rgbString = `rgb(34, 245, 128)`;
  //       document.getElementById('HTML').style.background = rgbString

  // Your job is to make the values random in the above code snippet.

  // 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.