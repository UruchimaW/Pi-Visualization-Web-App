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

function numberGlow(currentId){
    document.getElementById('piBackground').style.background = "black";
  var originalLetter = document.getElementById(currentId).innerHTML;
  for(var m=0;m<=1000;m++){
     var comparison = document.getElementById(m).innerHTML;
     if(comparison == originalLetter){
      document.getElementById(m).style.color = "white";
     }
  }
}


function typeWriter() {
  var onclick = "onclick='numberGlow(" + i + ")'"
  var styleClick = "style='color:black;'"
  if (i < visualPi.length) {
    document.getElementById("pi_numbers").innerHTML += "<span " + styleClick+onclick +"id=" + i + ">" + visualPi.charAt(i) + "</span>";
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
function bigTest(){
  var arrayOfPi = holder.slice('');
  // console.log(holder);
  function numberConverter(numberGiven){
    var currentValueNow;
    if(i==0){
      currentValueNow = 'zero';
    }
    else if(numberGiven==1){
      currentValueNow = 'one';
    }
    else if(numberGiven==2){
      currentValueNow = 'two';
    }
    else if(numberGiven==3){
      currentValueNow = 'three';
    }
    else if(numberGiven==4){
      currentValueNow = 'four';
    }
    else if(numberGiven==5){
      currentValueNow = 'five';
    }
    else if(numberGiven==6){
      currentValueNow = "six";
    }
    else if(numberGiven==7){
      currentValueNow = "seven";
    }
    else if(numberGiven==8){
      currentValueNow = "eight";
    }
    else if(numberGiven == null){
      currentValueNow = 'zero';
    }
    else {
      currentValueNow = "nine";
    }
    return currentValueNow;
  }


  class connectionsToNumber{
    constructor(){
      this.zero = 0;
      this.one = 0;
      this.two = 0;
      this.three = 0;
      this.four = 0;
      this.five = 0;
      this.six = 0;
      this.seven = 0;
      this.eight = 0;
      this.nine = 0;

    }
  }

  class allNumbers{
    constructor(){
      this.zero = new connectionsToNumber();
      this.one = new connectionsToNumber();
      this.two = new connectionsToNumber();
      this.three = new connectionsToNumber();
      this.four = new connectionsToNumber();
      this.five = new connectionsToNumber();
      this.six = new connectionsToNumber();
      this.seven = new connectionsToNumber();
      this.eight = new connectionsToNumber();
      this.nine = new connectionsToNumber();
    }
  }
  var all_numbers = new allNumbers();
  console.log(all_numbers.nine.nine);
  console.log(holder);
  console.log(arrayOfPi);
  for (var j = 0;j<arrayOfPi.length;j++){

    console.log(arrayOfPi[j]);
    console.log(arrayOfPi[j+1]);
    var currentValue;
    var nextValue;
    //iterating through the piArray
    //look at number and access its object class
    currentIndex = arrayOfPi[j];
    var nextNumber = j +1;
    nextIndex = arrayOfPi[nextNumber];
    currentValue = numberConverter(currentIndex);
    nextValue = numberConverter(nextIndex);
    all_numbers.currentValue.nextValue = (all_numbers.currentValue.nextValue) +1;
  }
}

// endtest

window.addEventListener('load', () => {
  var slider = document.getElementById("formControlRange");
  var output = document.getElementById("teststuff");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
    sliderValue = parseInt(this.value);
    var piArray = holder.slice('');
    // console.log(sliderValue+1);
    // console.log(sliderValue-1);
    var leftString = holder.slice((sliderValue-4),(sliderValue-1));
    var rightString = holder.slice((sliderValue),(sliderValue+3));
    if((leftString) == ''){
      leftString = "";
    }
    if(rightString == ''){
      rightString = "...";
    }
    document.getElementById("leftGuess").innerHTML = leftString;
    document.getElementById("middleGuess").innerHTML = piArray[sliderValue-1];
    document.getElementById("rightGuess").innerHTML = rightString;

  }

  document.querySelector('#pi_numbers').addEventListener("click", () => {
    bigTypeWriter();
    bigTest();
  });
  document.querySelector('#polarAdder').addEventListener("click", () => {
    barAdder();
  });
  document.querySelector('#pi_number').addEventListener("click", () => {
    dataAddertest();
  });
  // document.querySelector('#first').addEventListener("mouseover", changeOne);
  // document.querySelector('#second').addEventListener("mouseover", changeTwo);
  // document.querySelector('#third').addEventListener("mouseover", changeThree);
  // document.querySelector('#fourth').addEventListener("mouseover", changeFour);
  document.addEventListener('aos:in:super-duper', ({ detail }) => {
    // console.log('animated in', detail);
    setTimeout(bigTypeWriter,1500);
  });
});
