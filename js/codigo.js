/* JS */
$(window).ready(function() {
	hacerResize();
	cambiarAltura();
	desplegarMenu();
	agregarImagenes();
	animarNosotros();
	descripcionPlatos();
	
	$(window).resize(function() {
		eliminarResize();
		hacerResize();
		cambiarAltura();
	});
	
	/* Funcion Descripcion Platos La Carta */
	function descripcionPlatos() {
		$(".contenedorPrincipal").hover(
		function() {
			var indice = $(".contenedorPrincipal").index($(this));
			var alturaContenedor = $(".imagenContenedor").eq(indice).outerHeight(true);
		 	var anchoContenedor = $(".contenedorSecundario").eq(indice).width();
		 	$(".parrafoContenedor").eq(indice).css({"width": anchoContenedor, "height": alturaContenedor});
			$(".parrafoContenedor").eq(indice).removeAttr("hidden");
			$(".imagenContenedor").eq(indice).hide();
			$(".parrafoContenedor").eq(indice).addClass("animated pulse infinite");
		}, 
		function() {
			var indice = $(".contenedorPrincipal").index($(this));
			$(".parrafoContenedor").eq(indice).removeClass("animated pulse infinite");			
			$(".parrafoContenedor").eq(indice).attr("hidden", "true");
			$(".imagenContenedor").eq(indice).show();
		});
	}

	/* Funcion Agrega Background-Image a LaCarta y Eventos */
	function agregarImagenes() {
		var arregloCarta = ["ceviche-clasico", "ceviche-camarones", "ceviche-mango", "arroz-mariscos", 
			"pulpo-parrilla", "parihuela", "aji-gallina", "causa-limena", "lomo-saltado", "sopa-verduras", 
			"chupe-camarones", "sopa-minuta", "choritos-chalaca", "tequenos", "champinones-horno", "mazamorra", 
			"mousse-lucuma", "picarones"];
		var arregloEventos = ["musica-criolla", "karaoke", "cumpleanos", "local", "evento-trabajo", "fiesta-local"];
		/* contenedorSecundario | 0-17 pertenece a LaCarta (18 items) | 18-23 pertenece a Eventos (6 items) */
		$(".contenedorSecundario").each(function(index, obj) {
			if(index >= 0 && index <=17) {
				var indiceNuevo = index + 1;
				var indiceCarta = index;
				var rutaCarta = "images/carta" + numeroString(indiceNuevo) + "-" + arregloCarta[indiceCarta] + ".jpg";
				$(obj).css("background-image", "url(" + rutaCarta + ")");
			}
			else if(index >=18 && index <=23) {
				var indiceNuevo = index - 18 + 1;
				var indiceEventos = index - 18;
				var rutaEventos = "images/eventos" + numeroString(indiceNuevo) + "-" + arregloEventos[indiceEventos] + ".jpg";
				$(obj).css("background-image", "url(" + rutaEventos + ")");
			}
		});
	}

	function numeroString(indice) {
		var indexString;
		if(indice >= 1 && indice <= 9) {
			return "0" + indice.toString();
		}
		else {
			return indice.toString();
		}	
	}

	/*Funcion Animacion Nosotros */
	function animarNosotros() {
		$(".animarImagen").mouseenter(function() {
	    	$(this).addClass("animated swing");
		});	
		$(".animarImagen").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() {
	    	$(this).removeClass("animated swing");
		});		
	}

	/* Funciones Pantallas XXL */
	function hacerResize() {
		var elementos = $(".pantallasXXL");
	 	if($(window).width() > 1700) {
	 		elementos.wrapAll("<div class='row'></div>");
	 		elementos.eq(0).addClass("col-xl-2");
	 		elementos.eq(1).addClass("col-xl-8");
	 		elementos.eq(2).addClass("col-xl-2");
	 	}
	}

	function eliminarResize() {
		var elementos = $(".pantallasXXL");
 		elementos.eq(0).removeClass("col-xl-2");
 		elementos.eq(1).removeClass("col-xl-8");
 		elementos.eq(2).removeClass("col-xl-2");
		elementos.unwrap();
	}

	/* Funcion Ajustar Slider */
	function cambiarAltura() {
		var alturaActual = $("nav").height();
		$(".ajustaSlider").css("height", alturaActual);
	}

	/* Funcion Desplegar Menu La Carta */
	function desplegarMenu() {
		var boton = $(".formaBoton");
		var cuadroMenu = $(".platosCarta");
		
		boton.click(function() {
			boton.each(function(index, obj) {
				if($(obj).hasClass("active") == true) {
					$(obj).removeClass("active");
				}
			});
			$(this).addClass("active");

			/* cuadroMenu | 0-2 Ceviches | 3-5 Mariscos | 6-8 Criollos | 9-11 Sopas | 12-14 Piqueos | 15-17 Postres */
			cuadroMenu.hide();
			var indiceBotonActual = boton.index($(this));
			cuadroMenu.each(function(index, obj) {
				if(boton.eq(indiceBotonActual).html() == "Todos") {
					$(obj).fadeIn(1500);
				}
				else if(boton.eq(indiceBotonActual).html() == "Ceviches") {
					if(index>=0 && index<=2) {
						$(obj).fadeIn(1500);
					}
				}
				else if(boton.eq(indiceBotonActual).html() == "Mariscos") {
					if(index>=3 && index<=5) {
						$(obj).fadeIn(1500);
					}
				}
				else if(boton.eq(indiceBotonActual).html() == "Criollos") {
					if(index>=6 && index<=8) {
						$(obj).fadeIn(1500);
					}
				}
				else if(boton.eq(indiceBotonActual).html() == "Sopas") {
					if(index>=9 && index<=11) {
						$(obj).fadeIn(1500);
					}
				}
				else if(boton.eq(indiceBotonActual).html() == "Piqueos") {
					if(index>=12 && index<=14) {
						$(obj).fadeIn(1500);
					}
				}
				else if(boton.eq(indiceBotonActual).html() == "Postres") {
					if(index>=15 && index<=17) {
						$(obj).fadeIn(1500);
					}
				}	
			});
		});
	}
/*-------------------- Fin --------------------*/
});


/*-------------------- smooth-scroll --------------------*/
var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '#miCarousel', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 650, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {}, // Function. Custom easing pattern

	// Callback API
	before: function () {}, // Callback to run before scroll
	after: function () {} // Callback to run after scroll
});