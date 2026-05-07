const seguros = [
    { nombre: 'Seguro de Salud', id: 'salud-btn' },
    { nombre: 'Seguro de Vehículos', id: 'vehi-btn' },
    { nombre: 'Seguro de Vida', id: 'vida-btn' },
    { nombre: 'Seguros Incendio y Robos', id: 'incendio-btn' },
    { nombre: 'Seguro de Transporte', id: 'trans-btn' },
    { nombre: 'Seguros de Equipo y Maquinaria', id: 'equipo-btn' },
    { nombre: 'Seguro de Créditos y Fianzas', id: 'fianza-btn' },
    { nombre: 'Seguro de Responsabilidad Civil', id: 'civil-btn' }
];

function codeMensa(msj) {
    return encodeURIComponent(msj);
}

const botonElecto = document.querySelectorAll('.send-mensaje');
const telefono = 5930994423891;

botonElecto.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const idClicker = e.currentTarget.id;
        const seguroEncontrado = seguros.find(item => item.id === idClicker);


        if (seguroEncontrado) {
            const mensaje = `Hola, tengo una consulta sobre *${seguroEncontrado.nombre}*, ayudame con más información, por favor.`;
            const whaLink = `https://wa.me/${telefono}?text=${codeMensa(mensaje)}`;
            window.open(whaLink, '_blank');
        } else {
            console.error("No se encontró el ID:", idClicker);
        }
    });
});


const servicioClass = [
    { name: 'Servicio de Gestión Administrativa Empresarial', id: 'admin-btn' },
    { name: 'Servicio de Gestión y Optimización de Procesos', id: 'proceso-btn' }
];

const botonServicio = document.querySelectorAll('.service-cta');

botonServicio.forEach(parla => {
    parla.addEventListener('click', (a) => {
        const idService = a.currentTarget.id;
        const servicioEncontrado = servicioClass.find(element => element.id === idService);

        if (servicioEncontrado) {
            const message = `Hola, me proporcionas más información acerca del ${servicioEncontrado.name}. Por favor.`;

            const urlLink = `https://wa.me/${telefono}?text=${codeMensa(message)}`;
            window.open(urlLink, '_blank');
        }
    });
});


let nombreInput = document.querySelector('#nombre');
let mensajeCifradoInput = document.querySelector('#mensaje');
const enviarAccion = document.querySelector('.enviar');

enviarAccion.addEventListener('click', () => {
    const nombreUser = nombreInput.value;
    const mensajeUser = mensajeCifradoInput.value;

    if (nombreUser == '' || mensajeUser == '') {
        alert('Por Favor, Ingrese su Nombre y Mensaje para continuar');
    } else {
        const mensaje = `Hola me llamo *${nombreUser}*, _${mensajeUser}_`;

        const urlPage = `https://wa.me/${telefono}?text=${codeMensa(mensaje)}`;
        window.open(urlPage, '_blank');
    }
});