// Funcionalidad para enviar la cotización con todos los datos detallados a tu WhatsApp
document.getElementById('btnEnviarWhatsApp').addEventListener('click', function() {
    const origen = document.getElementById('origen').value.trim();
    const destino = document.getElementById('destino').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    // Tu número oficial de WhatsApp con código de país
    const numeroWhatsApp = "51952258542"; 

    // Construir un mensaje ordenado y profesional que te llegará directo al celular
    let mensaje = "Hola, deseo cotizar un servicio en Mudanzas y Fletes Joaquín.";
    
    if (origen !== "" || destino !== "" || descripcion !== "") {
        mensaje = `Hola, quiero cotizar un servicio en *Mudanzas y Fletes Joaquín*:\n\n- *Origen:* ${origen || 'No especificado'}\n- *Destino:* ${destino || 'No especificado'}\n- *Descripción:* ${descripcion || 'No especificada'}`;
    }

    // Codificar el mensaje para la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp con el mensaje listo para enviar
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, '_blank');
});