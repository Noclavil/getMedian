import MainNormal from "./quickselect";
import MainOptimised from "./quickselectoptimised";
import MainNaive from "./naive";

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  const data = new FormData(form);
  let test = ''
  for (const entry of data) {
    test = entry[1];
  };
  calculateData(test);
  event.preventDefault();
}, false);


function calculateData(test) {
  
  const windowSizes = {test1: 3, test2: 100, test3: 1000, test4: 10000}
  const windowSize = windowSizes[test];

  
  read(`../data/${test}.csv`).then(function(res) {
    //console.log(res)
    const Normal = MainNormal(windowSize, res)
    const Optimised = MainOptimised(windowSize, res)
    const Naive = MainNaive(windowSize, res)

    document.getElementById("test1").innerHTML = `Quickselect execution time ${Normal.time} milliseconds`
    document.getElementById("test2").innerHTML = `Quickselect optimised execution time ${Optimised.time} milliseconds`
    document.getElementById("test3").innerHTML = `Naive execution time ${Naive.time} milliseconds`

    console.log(compareArrays(Normal.result, Optimised.result, Naive.result))
    alert(`${test} finished!`)
  })

}

function read(url) {
  return fetch(url)
    .then(function(res){return res.text()})
    .then(function(res){return res.split("\n")}) 
    .then(function(res){ return res.map(function(o){ return parseInt(o) }) })
}

function compareArrays (arr1, arr2, arr3) {
  if (!(arr1.length === arr2.length && arr1.length === arr3.length)) {return 'arrays are not of same length'}

  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] === arr2[i] && arr1[i] === arr3[i])) {
      return `difference found: ${arr1[i]} - ${arr2[i]} - ${arr3[i]}`
    }
  }
  return 'no differences found'
}
