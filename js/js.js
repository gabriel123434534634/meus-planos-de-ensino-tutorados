function init(){
	atual = 1
	image = document.getElementById(atual)
	image.style.display = "block"
}
function next(){
	image = document.getElementById(atual)
	image.style.display = "None"
	try{
		atual += 1
		image = document.getElementById(atual)
		image.style.display = "block"
		idPage = document.getElementById("idPage")
		idPage.innerText = `Página ${atual}`
	}catch{
		atual -= 1
		image = document.getElementById(atual)
		image.style.display = "block"
		idPage = document.getElementById("idPage")
		idPage.innerText = `Página ${atual}`
	}
}
function prev(){
	image = document.getElementById(atual)
	image.style.display = "None"
	try{
		atual -= 1
		image = document.getElementById(atual)
		image.style.display = "block"
		idPage = document.getElementById("idPage")
		idPage.innerText = `Página ${atual}`
	}catch{
		atual += 1
		image = document.getElementById(atual)
		image.style.display = "block"
		idPage = document.getElementById("idPage")
		idPage.innerText = `Página ${atual}`
	}
}