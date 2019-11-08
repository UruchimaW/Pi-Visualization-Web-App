var holder;
var visualPi;
// this is where there will be a global array of the first 1000 digits of pi
var slicedFirst;
//
//will migrate to using ajax instead of this.
function pi (){
  console.log("this is workimg to this point");
  $.get("https://api.pi.delivery/v1/pi", {
  start: 0,
  numberOfDigits: 1000
}, function(data) {
  console.log(data);
  holder = data.content;
});
}

pi();

// This is corresponds to the changing color bar for that has been disbaled

// function changeOne(){
//   console.log('works1');
//   document.querySelector("#piBackground").style.background = "rgb(34, 116, 255)";
// }
//
// function changeTwo(){
//   console.log('works1');
//   document.querySelector("#piBackground").style.background = "rgb(245, 144, 51)";
// }
//
// function changeThree(){
//   console.log('works1');
//   document.querySelector("#piBackground").style.background = "rgb(245, 233, 77)";
// }
//
// function changeFour(){
//   console.log('works1');
//   document.querySelector("#piBackground").style.background = "rgb(240, 53, 50)";
// }

var first = "";
var secondHalf = "";

function piJoiner(){
  first = holder.slice(0,1);
  secondHalf = holder.slice(1);
  console.log(first + "." + secondHalf);
  visualPi = first + "." + secondHalf;
}


var i = 0;
var speed = 30;

function typeWriter() {
  console.log(visualPi);
  if (i < visualPi.length) {
    document.getElementById("pi_numbers").innerHTML += visualPi.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var typeWriterFired = 0;
function bigTypeWriter(){
  piJoiner();
  if (typeWriterFired == 0){
    typeWriterFired = 1;
    document.getElementById("pi_numbers").innerHTML = "";
    typeWriter();
  }
}


function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function timerTest(i,piArray){
  setTimeout(function(){
    addData(chart,piArray[i],piArray[i]);
  }, 2000);
}


function dataAddertest(){
  var test = holder;
  var piArray = test.slice('');
  for (var i=0;i<piArray.length;i++){
    // console.log(piArray[i]);
    timerTest(i,piArray);
    // addData(chart,number,number);
  }
}
var areaCounter = 3 ;
//Here is the adding data stuff for the
function barAdder(){
  var piArray = holder.slice('');
  addData(second,piArray[areaCounter],piArray[areaCounter]);
  areaCounter ++;
}
// test
//3141592
function guessAdder(sliderValue) {
  // sliderValue = parseInt(sliderValue)
  // var piArray = holder.slice('');
  // console.log(sliderValue);
  // console.log(sliderValue+1);
  // console.log(sliderValue-1);
  // var leftString = holder.slice((sliderValue-4),(sliderValue-1));
  // var rightString = holder.slice((sliderValue),(sliderValue+3));
  // console.log(rightString);
  // document.getElementById("leftGuess").innerHTML = leftString;
  // document.getElementById("middleGuess").innerHTML = piArray[sliderValue-1];
  // document.getElementById("rightGuess").innerHTML = rightString;


//Updating slider value dynamically


}

window.addEventListener('load', () => {
  var slider = document.getElementById("formControlRange");
  var output = document.getElementById("teststuff");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
    sliderValue = parseInt(this.value);
    var piArray = holder.slice('');
    console.log(sliderValue);
    // console.log(sliderValue+1);
    // console.log(sliderValue-1);
    var leftString = holder.slice((sliderValue-4),(sliderValue-1));
    var rightString = holder.slice((sliderValue),(sliderValue+3));
    console.log(rightString);
    document.getElementById("leftGuess").innerHTML = leftString;
    document.getElementById("middleGuess").innerHTML = piArray[sliderValue-1];
    document.getElementById("rightGuess").innerHTML = rightString;

  }



  document.querySelector('#pi_numbers').addEventListener("click", () => {
    bigTypeWriter();
  });
  document.querySelector('#secondtest').addEventListener("click", () => {
    var sliderValue = document.getElementById("formControlRange").value;
    guessAdder(sliderValue);
    // document.getElementById("teststuff").innerHTML = sliderValue;

  });
  document.querySelector('#polarAdder').addEventListener("click", () => {
    barAdder();
  });
  document.querySelector('#pi_number').addEventListener("click", () => {
    dataAddertest();
  });
  document.querySelector('#first').addEventListener("mouseover", changeOne);
  document.querySelector('#second').addEventListener("mouseover", changeTwo);
  document.querySelector('#third').addEventListener("mouseover", changeThree);
  document.querySelector('#fourth').addEventListener("mouseover", changeFour);
  document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});
});
