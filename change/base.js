console.log("Sanity Check: JS is working!");

let element = document.querySelector("#time")
element.textContent = Date.now();

let x = document.querySelector("#left")

let y = document.querySelector("#right")



let total= document.querySelector("#total");
let button = document.createElement("button")

x.addEventListener('change', updateValue); 
y.addEventListener('change', updateValue); 

function updateValue(e) { 
	total.value = Number(x.value) + Number(y.value)
	}
// get value is key.. 



