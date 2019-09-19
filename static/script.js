var holder;

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

function setter(){
  console.log(holder);
  var given_number = document.querySelector('#pi_numbers');
  given_number.innerHTML = holder;
  console.log(holder);
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
  secondHalf = holder.slice(1)
  console.log(first + "." + secondHalf);
  holder = first + "." + secondHalf;
}



var i = 0;
var speed = 30;

function typeWriter() {
  console.log(holder);
  if (i < holder.length) {
    document.getElementById("pi_numbers").innerHTML += holder.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function bigTypeWriter(){
  piJoiner();
  document.getElementById("pi_numbers").innerHTML = "";
  typeWriter();
}
// Here we are turning the string delivered by the API into numbers
testdata = holder
function dataVisualization(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: testdata
          }]
      },

      // Configuration options go here
      options: {}
  });

  function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
  }
  function dataAddertest(){
  two = ['two'];
  stuffData = [2];
  addData(myChart,two,stuffData);
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
dataVisualization();

});
