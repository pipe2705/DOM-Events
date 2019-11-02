console.log("Sanity Check: JS is working!");



let formList = document.querySelectorAll("form")

let element = document.querySelector("#time")
element.textContent = Date.now()

let stop = (e)=> {
	e.preventDefault()

}

for (x of formList) { 

	x.addEventListener("submit", stop)
}



//when you use query selector all they are put into a node list. 