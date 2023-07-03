import Burger from './classBurger.js'
const contenedor= document.getElementById('contentMB')


window.addEventListener('load',()=>{
	let menu = new Burger()
	menu.addOpcion('inicio','./')
	menu.addOpcion('Comprar','../templates/comprar.html')
	menu.addOpcion('Alquilar','../templates/alquilar.html')
	menu.addOpcion('Franquicia','../templates/franquicia.html')
	menu.addOpcion('Blog','../templates/blog.html')

	contenedor.appendChild(menu.menu)
})