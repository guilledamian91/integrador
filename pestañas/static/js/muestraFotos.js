
let contenedor = document.getElementById('fotosContent');


let imagenes = ["{% static './img/dep1.jpg' %}","sources/dep2.jpg","sources/dep3.jpg","sources/dep4.jpg","sources/dep5.jpg"];
let desplazamiento;


window.addEventListener('load',function(){
	imagenes.forEach(function(i){
		let img = document.createElement('img')
		img.setAttribute('src',i)
		img.classList.add('muestra')

		contenedor.appendChild(img)
		
	})
	automatizar()
})

window.addEventListener('resize', ()=>{
	let fotos = document.querySelectorAll('.muestra');
	desplazamiento = fotos[0].offsetWidth+12;
	automatizar();
})

function automatizar(){
	let fotos = document.querySelectorAll('.muestra');
	let pos = 0;
	desplazamiento = fotos[0].offsetWidth+12;
	let final = fotos.length*desplazamiento*(-1);


	setInterval(function(){

		pos-=desplazamiento;

		if(pos>final){
			fotos.forEach(function(e){
				e.style.left= pos+'px';

			});
		}else{
			pos=0;
		}

	},4000)
}


