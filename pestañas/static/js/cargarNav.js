import Nav from './classNav.js'	



let c = document.getElementById('navegacion')

window.addEventListener('load',()=>{
	let who = window.location.pathname
	
	if(who=="/inmobiliaria/"||who=="{% url 'index' %}"){
		c.appendChild(new Nav("../pestañas/static/img/logo.png",["Inicio","Comprar","Alquilar","Blog","Franquicia"],["./","{% url 'comprar' %}","../templates/alquilar.html","../templates/blog.html","../templates/franquicia.html"]))	
	}else{
		c.appendChild(new Nav("../pestañas/static/img/logo.png",["Inicio","Comprar","Alquilar","Blog","Franquicia"],["{% url 'comprar' %}","../templates/alquilar.html","../templates/blog.html","../templates/franquicia.html"]))
	}
	
})