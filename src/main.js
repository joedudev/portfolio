import AOS from "aos";

// Inicialización con configuración sutil
AOS.init({
	offset: 120, // Distancia del elemento al viewport para disparar
	delay: 50, // Delay pequeño para fluidez
	duration: 800, // Duración de la animación en ms
	easing: "ease-in-out",
	once: true, // ¿Animar solo una vez al bajar?
});
