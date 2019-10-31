var holder;
var visualPi;
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


function changeOne(){
  console.log('works1');
  document.querySelector("#piBackground").style.background = "rgb(34, 116, 255)";
}

function changeTwo(){
  console.log('works1');
  document.querySelector("#piBackground").style.background = "rgb(245, 144, 51)";
}

function changeThree(){
  console.log('works1');
  document.querySelector("#piBackground").style.background = "rgb(245, 233, 77)";
}

function changeFour(){
  console.log('works1');
  document.querySelector("#piBackground").style.background = "rgb(240, 53, 50)";
}

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
  var piArray = holder.slice('');
  for (i=0;i<piArray.length;i++){
    // console.log(piArray[i]);
    timerTest(i,piArray);
    // addData(chart,number,number);
  }
}
// adding data to the chart lets see if this works


// Here we are adding data

// this is code to sort out a dictionary of all the numbers

window.addEventListener('load', () => {
  document.querySelector('#pi_numbers').addEventListener("click", () => {
    bigTypeWriter();
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
