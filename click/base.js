console.log("Sanity Check: JS is working!");

let ul = document.querySelector("ul")
let li = document.createElement("li")
let quotes = document.querySelectorAll("span")

let imperative = document.getElementById('imperatives'); 


for (quote of quotes){

quote.addEventListener("click", (event) => {

	let quote = event.target;

	let newSpan = document.createElement("li"); 
	newSpan.textContent = quote.textContent;

	ul.append(newSpan)
})

}; 
