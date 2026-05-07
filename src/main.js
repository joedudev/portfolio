// Importación de los estilos globales (Vite se encarga de compilar el SASS)
import "./styles/main.scss";

import AOS from "aos";

// Inicialización con configuración sutil
AOS.init({
	offset: 120,
	delay: 50,
	duration: 800,
	easing: "ease-in-out",
	once: true,
});
