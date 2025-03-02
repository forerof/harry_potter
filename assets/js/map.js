// Función para mostrar la alerta personalizada
function showCustomAlert(title, message) {
    const alertElement = document.getElementById('custom-alert');
    const alertTitle = alertElement.querySelector('.alert-title');
    const alertMessage = alertElement.querySelector('.alert-message');

    // Actualizar el contenido de la alerta
    alertTitle.textContent = title;
    alertMessage.textContent = message;

    // Mostrar la alerta
    alertElement.style.display = 'block';
}

// Función para ocultar la alerta personalizada
function hideCustomAlert() {
    const alertElement = document.getElementById('custom-alert');
    alertElement.style.display = 'none';
}

// Asignar evento al botón de cerrar
document.querySelector('.alert-close').addEventListener('click', hideCustomAlert);

// Inicializar el mapa
const map = L.map('map', {
    minZoom: 1,
    maxZoom: 10,
    zoomControl: true,
    touchZoom: true,
    scrollWheelZoom: false,
    attributionControl: false, // Desactiva los créditos predeterminados
}).setView([0, 0]); // Centro y zoom inicial

// Añadir la imagen del mapa de Hogwarts
const hogwartsMap = L.imageOverlay(
    './assets/img/hogwarts-map.avif', // Ruta de la imagen
    [[-180, -180], [180, 180]], // Coordenadas de la imagen (esquina superior izquierda y esquina inferior derecha)
    {
        attribution: 'Mapa de Hogwarts', // Atribución (opcional)
    }
).addTo(map);

// Ajustar los límites del mapa para que coincidan con la imagen
map.fitBounds([
    [-180, -180], // Esquina superior izquierda
    [180, 180],   // Esquina inferior derecha
]);

if (window.innerWidth <= 800) {
    map.setZoom(2); // Aplica zoom nivel 5 en móviles
}

if (window.innerWidth > 800) {
    map.setZoom(3); // Aplica zoom nivel 5 en móviles
}

// Crear un icono personalizado
const customIcon = L.icon({
    iconUrl: './assets/img/marker.png', // Ruta de la imagen
    iconSize: [78, 68], // Tamaño del icono (ancho, alto)
    iconAnchor: [19, 38], // Punto de anclaje (centro inferior)
    popupAnchor: [0, -38], // Punto donde se abre el popup (relativo al iconAnchor)
});

// Añadir marcadores en zonas importantes
const gryffindorCommonRoom = L.marker([50, 15], { icon: customIcon }).addTo(map); // Sala Común de Gryffindor
const hufflepuffCommonRoom = L.marker([20, -60], { icon: customIcon }).addTo(map); // Sala Común de Hufflepuff
const ravenclawCommonRoom = L.marker([-20, -15], { icon: customIcon }).addTo(map); // Sala Común de Ravenclaw
const greatHall = L.marker([-20, -80], { icon: customIcon }).addTo(map); // Gran Comdedor
const gardens = L.marker([-80, 30], { icon: customIcon }).addTo(map); // Jardines

gryffindorCommonRoom.on('click', () => {
    showCustomAlert('Sala Común de Gryffindor', 'La Sala Común de Gryffindor es el punto de reunión de los estudiantes de esta casa en Hogwarts. Se encuentra en una de las torres del castillo y está protegida por el retrato de la Dama Gorda, quien solo permite el acceso a aquellos que conocen la contraseña. Su interior es cálido y acogedor, con grandes sillones, una chimenea encendida y tapices de color rojo y dorado que reflejan el espíritu valiente y audaz de la casa. Es un lugar donde los alumnos de Gryffindor pueden descansar, estudiar y compartir momentos entre amigos.');
});

hufflepuffCommonRoom.on('click', () => {
    showCustomAlert('Sala Común de Hufflepuff', 'La Sala Común de Hufflepuff se encuentra en el sótano de Hogwarts, cerca de las cocinas del castillo. Su entrada está oculta detrás de un barril y solo se abre si se golpea en el ritmo correcto; un intento incorrecto provoca que la persona sea bañada en vinagre. Su interior es acogedor y luminoso, con una decoración inspirada en la naturaleza: paredes con tonos amarillos y tierra, tapices con imágenes de plantas y muchos cojines cómodos. También cuenta con túneles redondeados en lugar de pasillos y una abundancia de plantas vivas, reflejando la afinidad de Hufflepuff con la herbología y la calidez hogareña.');
});

ravenclawCommonRoom.on('click', () => {
    showCustomAlert('Gran Salón', 'La Sala Común de Ravenclaw se encuentra en una de las torres más altas de Hogwarts, ofreciendo una vista panorámica del castillo y sus alrededores. Su entrada no tiene contraseña, sino que se accede respondiendo correctamente a un acertijo planteado por un aldabón de bronce en forma de águila, lo que refleja el énfasis de la casa en la inteligencia y el aprendizaje.');
});

greatHall.on('click', () => {
    showCustomAlert('Gran Salón', 'El Gran Salón es el corazón de Hogwarts, donde los estudiantes y profesores se reúnen para las comidas, celebraciones y eventos importantes. Es un espacio inmenso y majestuoso, con un techo encantado que refleja el cielo exterior, ya sea soleado, estrellado o cubierto de tormentas. En el centro del salón se encuentran cuatro largas mesas, cada una destinada a una de las casas de Hogwarts: Gryffindor, Hufflepuff, Ravenclaw y Slytherin. Al final del salón, en un estrado elevado, está la Mesa de los Profesores, donde se sienta el director junto con el resto del personal docente.');
});

gardens.on('click', () => {
    showCustomAlert('Jardines', 'Los jardines de Hogwarts son extensos terrenos al aire libre que rodean el castillo, ofreciendo espacios naturales llenos de magia y misterio. En ellos se encuentran grandes praderas, árboles centenarios y senderos de piedra que conectan con diferentes áreas del colegio. Entre los lugares más destacados están el Lago Negro, hogar de criaturas como el calamar gigante y las sirenas; el Campo de Quidditch, donde se celebran los partidos entre casas; y el Bosque Prohibido, un lugar oscuro y peligroso habitado por criaturas como hipogrifos, acromántulas y centauros.');
});

