//Función para encender la bombilla
function encender() {
	document.getElementById("bombilla").src = "https://media.istockphoto.com/id/1400469622/es/foto/bombilla-vintage-de-filamento-led-de-tungsteno-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=psehLM0qNxiAUq5GqKgZmt2e5wD18vo4cPhp6dvO5-s="; // imagen encendida
	document.getElementById("estado").textContent = "La bombilla esta encendida";
}

//Funcion para apagar la bombilla
function apagar() {
	document.getElementById("bombilla").src = "https://previews.123rf.com/images/chachar/chachar1403/chachar140300012/27373902-realistic-detailed-illustration-of-unlit-light-bulb.jpg"; //imagen apagada
	document.getElementById("estado").textContent = "La bombilla esta apagada";
}